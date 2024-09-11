import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = ({ children }: HeaderProps) => {
    return (
        <div className='header'>
            <Link href="/" className='md:flex-1 flex items-center gap-3'>
                <Image src="/assets/images/logo.png" alt='logo' width={40} height={40} className='hidden md:block' />
                <h1 className='md:block hidden text-2xl font-semibold tracking-wider'>K-Docs</h1>
                <Image src="/assets/images/logo.png" alt='logo' width={32} height={32} className='md:hidden block mr-2' />
            </Link>
            {children}
        </div>
    )
}

export default Navbar