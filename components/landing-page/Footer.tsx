import Link from 'next/link'
import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { TbBrandGithubFilled } from "react-icons/tb";

const Footer = () => {
    return (
        <section className='w-full flex items-center justify-between sm:px-8 px-5 py-4 !pt-6 border-t border-gray-800'>
            <p className='text-sm sm:text-[18px]'>© 2024 Ahmad Bisry</p>

            <div className='flex items-center gap-3'>
                <Link href='https://www.linkedin.com/in/ahmad-bisry-4802542ba/' className='text-gray-50 hover:text-gray-400 transition-all duration-300' target='blank'>
                    <IoLogoLinkedin className='size-7' />
                </Link>
                <Link href='https://github.com/ahmadbisry-1626' className='text-gray-50 hover:text-gray-400 transition-all duration-300' target='blank'>
                    <TbBrandGithubFilled className='size-7' />
                </Link>
                <Link href='https://www.instagram.com/ahmadbirsy/' className='text-gray-50 hover:text-gray-400 transition-all duration-300' target='blank'>
                    <AiFillInstagram className='size-7' />
                </Link>
            </div>
        </section>
    )
}

export default Footer
