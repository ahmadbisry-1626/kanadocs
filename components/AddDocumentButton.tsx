"use client"

import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { createDocument } from '@/lib/actions/room.actions'
import { useRouter } from 'next/navigation'

const AddDocumentButton = ({ userId, email }: AddDocumentBtnProps) => {
    const router = useRouter()

    const addDocumentHandler = async () => {
        try {
            const room = await createDocument({ userId, email })

            if (room) router.push(`/documents/${room.id}`)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Button type='submit' onClick={addDocumentHandler} className='bg-[#1C274C] hover:bg-[#161f3b] flex items-center gap-4 max-md:shadow-md max-sm:py-7 py-6 rounded-full sm:rounded-[8px] group transition-all !duration-300'>
            <Image src="/assets/icons/add.svg" alt='Button image' width={24} height={24} className='group-hover:opacity-50 transition-all duration-300 sm:-ml-[4px]' />
            <p className='hidden sm:block font-medium group-hover:text-gray-400 transition-all duration-300'>
                Start a blank document
            </p>
        </Button>
    )
}

export default AddDocumentButton
