import Image from 'next/image'
import React, { useState } from 'react'
import UserTypeSelector from './UserTypeSelector'
import { Button } from './ui/button'
import { removeCollaborator, updateDocumentAccess } from '@/lib/actions/room.actions'

const Collaborator = ({ roomId, user, creatorId, collaborator, email }: CollaboratorProps) => {
    const [userType, setUserType] = useState(collaborator.userType || 'viewer')

    const [loading, setIsLoading] = useState(false)

    const shareDocumentHandler = async (type: string) => {
        setIsLoading(true)

        await updateDocumentAccess({
            roomId,
            email,
            userType: type as UserType,
            updatedBy: user
        })

        setIsLoading(false)
    }
    const removeCollaboratorHandler = async (email: string) => {
        setIsLoading(true)

        await removeCollaborator({
            roomId,
            email
        })

        setIsLoading(false)
    }

    const owner = creatorId === collaborator.id

    return (
        <li className={`flex items-center justify-between gap-2 py-3 max-md:flex-col max-md:gap-3 max-md:items-start ${owner && '!flex-row !items-center'}`}>
            <div className='flex gap-2'>
                <Image
                    src={collaborator.avatar}
                    alt='collaborator'
                    width={36} height={36}
                    className='size-9 rounded-full'
                />
                <div className=''>
                    <p className='line-clamp-1 text-sm font-semibold leading-4 text-gray-50'>
                        {collaborator.name}
                        <span className='text-10-regular pl-2 text-blue-100'>
                            {loading && 'Updating...'}
                        </span>
                    </p>
                    <p className='text-sm font-light text-blue-100'>
                        {collaborator.email}
                    </p>
                </div>
            </div>

            {creatorId === collaborator.id ? (
                <p className='text-sm text-blue-100'>
                    Owner
                </p>
            ) : (
                <div className='flex items-center max-md:ml-8'>
                    <UserTypeSelector
                        userType={userType as UserType}
                        setUserType={setUserType || 'viewer'}
                        onClickHandler={shareDocumentHandler}
                    />
                    <Button className='bg-[#1C274C] hover:bg-[#1C274C]' type='button' onClick={() => removeCollaboratorHandler(collaborator.email)}>
                        Remove
                    </Button>
                </div>
            )}


        </li>
    )
}

export default Collaborator
