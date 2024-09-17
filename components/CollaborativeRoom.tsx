'use client'

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import React, { ReactNode } from 'react'
import Loader from './Loader'
import Navbar from './Navbar'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Editor } from './editor/Editor'
import ActiveCollabolators from './ActiveCollabolators'

const CollaborativeRoom = ({ roomId, roomMetadata }: CollaborativeRoomProps) => {
    return (
        <RoomProvider id={roomId}>
            <ClientSideSuspense fallback={<Loader />}>
                <div className='collaborative-room'>
                    <Navbar>
                        <div className='w-fit flex items-center justify-center gap-2'>
                            <p className='document-title !font-medium'>Share</p>
                        </div>
                        <div className='flex w-full flex-1 justify-end gap-2 sm:gap-3'>
                            <ActiveCollabolators />
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </Navbar>
                    <Editor />
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default CollaborativeRoom
