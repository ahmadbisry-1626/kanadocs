"use client"

import { useSelf } from '@liveblocks/react/suspense'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button'
import Image from 'next/image'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { MdEmail } from "react-icons/md";
import UserTypeSelector from './UserTypeSelector'
import Collaborator from './Collaborator'


const ShareModal = ({ roomId, currentUserType, collaborators, creatorId }: ShareDocumentDialogProps) => {
    const user = useSelf()

    const [open, setIsOpen] = useState(false)
    const [loading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [userType, setUserType] = useState<UserType>('viewer')

    const shareDocumentHandler = async () => {

    }

    return (
        <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger>
                <Button className='bg-[#1C274C] hover:bg-[#1C274C] flex h-9 gap-2 group overflow-hidden relative' disabled={currentUserType !== 'editor'}>
                    <Image src="/assets/icons/share-img.svg" alt='share-button' width={18} height={18} className='min-w-4 md:size-5 group-hover:-translate-y-4 group-hover:opacity-0 transition-all duration-300' />
                    <p className='mr-1 hidden sm:block group-hover:-translate-y-4 group-hover:opacity-0 transition-all duration-300'>Share</p>
                    <div className='absolute flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:!translate-y-0 transition-all duration-300'>
                        <Image src="/assets/icons/share-img.svg" alt='share-button' width={18} height={18} className='min-w-4 md:size-5 ' />
                        <p className='mr-1 hidden sm:block transition-all duration-300'>Share</p>
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className='shad-dialog'>
                <DialogHeader>
                    <DialogTitle>Invite someone to this project</DialogTitle>
                    <DialogDescription>
                        Select which users can access this document
                    </DialogDescription>
                </DialogHeader>

                <div className='flex items-center gap-3 mt-3'>
                    <div className='flex flex-1 items-center rounded-md bg-dark-400'>
                        <div className='flex flex-1 items-center gap-2'>
                            <MdEmail className='size-6 text-gray-400 ml-3' />
                            <Input
                                placeholder='Enter email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='share-input !pl-0'
                            />
                        </div>
                        <UserTypeSelector userType={userType} setUserType={setUserType} />
                    </div>
                    <Button type="submit" onClick={shareDocumentHandler} className='bg-[#1C274C] hover:bg-[#1C274C] flex h-full gap-1 px-5' disabled={loading}>
                        {loading ? 'Sending...' : 'Invite'}
                    </Button>
                </div>

                <div className='my-2 space-y-2'>
                    <ul className='flex flex-col'>
                        {collaborators.map((collaborator) => (
                            <Collaborator
                                key={collaborator.id}
                                roomId={roomId}
                                creatorId={creatorId}
                                email={collaborator.email}
                                collaborator={collaborator}
                                user={user.info}
                            />
                        ))}
                    </ul>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default ShareModal
