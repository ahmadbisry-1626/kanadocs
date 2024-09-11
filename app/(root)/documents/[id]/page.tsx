import { Editor } from '@/components/editor/Editor'
import Navbar from '@/components/Navbar'
import React from 'react'

const Document = () => {
    return (
        <div>
            <Navbar>
                <div className='w-fit flex items-center justify-center gap-2'>
                    <p className='document-title !font-medium'>Untitled</p>
                </div>
            </Navbar>
            <Editor />
        </div>
    )
}

export default Document
