import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

const NavbarLandingPage = () => {
    return (
        <nav className='fixed left-0 bg-[#09111f] top-0 w-full sm:min-h-[60px] flex items-center justify-between sm:px-8 px-5 sm:py-6 py-4 z-20'>
            <div className='flex items-center gap-3'>
                <Image src="/assets/images/logo-kanadocs.png" alt='Logo kanadocs' width={35} height={35} className='sm:w-[35px] sm:h-[35px] w-[30px] h-[30px]' />
                <h2 className='sm:text-[24px] text-[20px] font-semibold'>Kanadocs</h2>
            </div>
            <Link href='/documents'>
                <Button className='bg-gray-50 text-slate-900 hover:bg-gray-300 transition-all duration-300'>
                    Get started
                </Button>
            </Link>
        </nav>
    )
}

export default NavbarLandingPage
