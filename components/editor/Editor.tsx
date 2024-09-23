'use client';


import ToolbarPlugin from './plugins/ToolbarPlugin';
import { HeadingNode } from '@lexical/rich-text';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import React from 'react';
import Theme from './plugins/Theme';

import { FloatingComposer, FloatingThreads, liveblocksConfig, LiveblocksPlugin, useEditorStatus } from '@liveblocks/react-lexical'
import Loader from '../Loader';
import FloatingToolbar from './plugins/FloatingToolbarPlugin';
import { useThreads } from '@liveblocks/react/suspense';
import Comments from '../Comments';
import Link from 'next/link';
import { HiMiniHome } from "react-icons/hi2";

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.

function Placeholder() {
    return <div className="editor-placeholder">Enter some rich text...</div>;
}

export function Editor({ roomId, currentUserType }: { roomId: string, currentUserType: UserType }) {
    const status = useEditorStatus();
    const { threads } = useThreads()

    const initialConfig = liveblocksConfig({
        namespace: 'Editor',
        nodes: [HeadingNode],
        onError: (error: Error) => {
            console.error(error);
            throw error;
        },
        theme: Theme,
        editable: currentUserType === 'editor',
    });

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <div className="editor-container size-full">
                <div className='toolbar-wrapper flex min-w-full items-center justify-between'>
                    <ToolbarPlugin />
                    {/* {currentUserType === 'editor' && <DeleteModal roomId={roomId}/>} */}
                    <Link href="/" className='text-gray-400 transition-all duration-300 font-medium hidden md:flex items-center group'>
                        <HiMiniHome className='w-8 h-8 group-hover:-translate-x-2 translate-x-16 transition-all duration-300' />
                        <span className='opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300'>
                            Go back
                        </span>
                    </Link>
                </div>
                <div className='editor-wrapper flex flex-col items-center justify-start'>
                    {status === 'not-loaded' || status === 'loading' ? (
                        <Loader />
                    ) : (
                        <div className="editor-inner min-h-[1100px] relative mb-5 h-fit w-full max-w-[800px] shadow-md lg:mb-10">
                            <RichTextPlugin
                                contentEditable={
                                    <ContentEditable className="editor-input h-full !caret-gray-50" />
                                }
                                placeholder={<Placeholder />}
                                ErrorBoundary={LexicalErrorBoundary}
                            />

                            {currentUserType === 'editor' && <FloatingToolbar />}
                            <HistoryPlugin />
                            <AutoFocusPlugin />
                        </div>
                    )}

                    <LiveblocksPlugin>
                        <FloatingComposer className='w-[350px]' />
                        <FloatingThreads threads={threads} />
                        <Comments />
                    </LiveblocksPlugin>
                </div>
            </div>
        </LexicalComposer>
    );
}
