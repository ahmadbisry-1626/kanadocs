"use client"

import React, { ReactNode } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Image from 'next/image'
import { useInboxNotifications, useUnreadInboxNotificationsCount } from '@liveblocks/react/suspense'
import { InboxNotification, InboxNotificationList, LiveblocksUIConfig } from '@liveblocks/react-ui'


const Notifications = () => {
    const { inboxNotifications } = useInboxNotifications()
    const { count } = useUnreadInboxNotificationsCount()

    const unreadNotifications = inboxNotifications.filter((notification) => !notification.readAt)

    return (
        <Popover>
            <PopoverTrigger className='relative flex size-10 justify-center items-center rounded-lg'>
                <Image src="/assets/icons/bell.svg" alt='notification image' width={24} height={24} />
                {count > 0 && (
                    <div className='absolute right-[7px] top-[7px] z-40 size-3 rounded-full bg-blue-500' />
                )}
            </PopoverTrigger>
            <PopoverContent align="end" className="shad-popover">
                <LiveblocksUIConfig
                    overrides={{
                        INBOX_NOTIFICATION_TEXT_MENTION: (user: ReactNode) => {
                            return <>{user} mentioned you</>;
                        },
                    }}
                >
                    <InboxNotificationList>
                        {unreadNotifications.length <= 0 && (
                            <p className="py-2 text-center text-dark-500">
                                No notifications yet
                            </p>
                        )}

                        {unreadNotifications.length > 0 &&
                            unreadNotifications.map((inboxNotification: any) => (
                                <InboxNotification
                                    key={inboxNotification.id}
                                    inboxNotification={inboxNotification}
                                    className="!bg-dark-300 text-white"
                                    href={`/documents/${inboxNotification.roomId}`}
                                    showActions={false}
                                    kinds={{
                                        thread: (props) => (
                                            <InboxNotification.Thread
                                                {...props}
                                                showRoomName={false}
                                                showActions={false}
                                            />
                                        ),
                                        textMention: (props) => {
                                            return (
                                                <InboxNotification.TextMention
                                                    {...props}
                                                    showRoomName={false}
                                                />
                                            );
                                        },
                                        $documentAccess: (props) => {
                                            const { title, avatar } =
                                                props.inboxNotification.activities[0].data;

                                            return (
                                                <InboxNotification.Custom
                                                    {...props}
                                                    title={title}
                                                    aside={
                                                        <InboxNotification.Icon className="bg-transparent">
                                                            <Image
                                                                src={(avatar as string) || ""}
                                                                width={36}
                                                                height={36}
                                                                alt="avatar"
                                                                className="rounded-full md:w-[36px] md:h-[36px] w-[28px] h-[28px]"
                                                            />
                                                        </InboxNotification.Icon>
                                                    }
                                                    className='max-md:text-[14px] text-gray-50 bg-dark-300 max-md:-ml-4'
                                                >
                                                    {props.children}
                                                </InboxNotification.Custom>
                                            );
                                        },
                                    }}
                                />
                            ))}
                    </InboxNotificationList>
                </LiveblocksUIConfig>
            </PopoverContent>
        </Popover>

    )
}

export default Notifications
