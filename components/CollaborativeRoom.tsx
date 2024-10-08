'use client'

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import React, { useEffect, useRef, useState } from 'react'
import Loader from './Loader'
import Navbar from './Navbar'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Editor } from './editor/Editor'
import ActiveCollabolators from './ActiveCollabolators'
import { Input } from './ui/input'
import Image from 'next/image'
import { updateDocument } from '@/lib/actions/room.actions'
import ShareModal from './ShareModal'

const CollaborativeRoom = ({ roomId, roomMetadata, users, currentUserType }: CollaborativeRoomProps) => {


    const [editing, setEditing] = useState(false)
    const [loading, setLoading] = useState(false)
    const [documentTitle, setDocumentTitle] = useState(roomMetadata.title)

    const containerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLDivElement>(null)

    const updateTitleHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setLoading(true)

            try {
                if (documentTitle !== roomMetadata.title) {
                    const updatedDocument = await updateDocument(roomId, documentTitle)

                    if (updatedDocument) {
                        setEditing(false)
                    }
                }
            } catch (error) {
                console.log(`Error updating document title: ${error}`)
            }

            setLoading(false)
        }
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setEditing(false)
                updateDocument(roomId, documentTitle)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [roomId, documentTitle]);

    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus()
        }
    }, [editing]);

    return (
        <RoomProvider id={roomId}>
            <ClientSideSuspense fallback={<Loader />}>
                <div className='collaborative-room'>
                    <Navbar>
                        <div ref={containerRef} className='w-fit flex items-center justify-center gap-2'>
                            {editing && !loading ? (
                                <Input
                                    type='text'
                                    value={documentTitle}
                                    ref={inputRef}
                                    placeholder='Enter Document Title'
                                    onChange={(e) => setDocumentTitle(e.target.value)}
                                    onKeyDown={updateTitleHandler}
                                    disable={!editing}
                                    className='document-title-input'
                                />
                            ) : (
                                <p className='document-title !font-medium'>{documentTitle}</p>
                            )}

                            {currentUserType === 'editor' && !editing && (
                                <Image
                                    src={'/assets/icons/edit.svg'}
                                    alt='edit'
                                    width={24}
                                    height={24}
                                    onClick={() => setEditing(true)}
                                    className='cursor-pointer'
                                />
                            )}

                            {currentUserType !== 'editor' && !editing && (
                                <p className='view-only-tag'>View only</p>
                            )}

                            {loading && (
                                <p className='text-sm text-gray-400'>saving...</p>
                            )}
                        </div>
                        <div className='flex w-full flex-1 justify-end gap-2 sm:gap-4'>
                            <ActiveCollabolators />

                            <ShareModal
                                roomId={roomId}
                                collaborators={users}
                                creatorId={roomMetadata.creatorId}
                                currentUserType={currentUserType}
                            />

                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </Navbar>
                    <Editor roomId={roomId} currentUserType={currentUserType} title={documentTitle}/>
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default CollaborativeRoom
