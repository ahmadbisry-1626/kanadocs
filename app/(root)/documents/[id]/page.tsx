import CollaborativeRoom from '@/components/CollaborativeRoom'
import { getDocument } from '@/lib/actions/room.actions'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'
import { metadata } from '../../../layout';
import { getClerkUser } from '@/lib/actions/user.actions'

const Document = async ({ params: { id } }: SearchParamProps) => {
    const clerkUser = await currentUser()
    if (!clerkUser) redirect('/sign-in')

    const room = await getDocument({
        roomId: id,
        userId: clerkUser.emailAddresses[0].emailAddress,
    })

    if (!room) redirect('/')

    const userIds = Object.keys(room.usersAccesses)
    const users = await getClerkUser({ userIds })
    const usersData = users.map((user: User) => ({
        ...user,
        userType: room.usersAccesses[user.email]?.includes('room:write')
            ? 'editor'
            : 'viewer',
    }))

    const currentUserType = room.usersAccesses[clerkUser.emailAddresses[0].emailAddress]?.includes('room:write')
        ? 'editor'
        : 'viewer'

    return (
        <main className='w-full flex flex-col items-center'>
            <CollaborativeRoom
                roomId={id}
                roomMetadata={room.metadata}
                users={usersData}
                currentUserType={currentUserType}
            />
        </main>
    )
}

export default Document
