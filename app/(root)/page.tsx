import Features from '@/components/landing-page/Features'
import Footer from '@/components/landing-page/Footer'
import HeroSection from '@/components/landing-page/HeroSection'
import NavbarLandingPage from '@/components/landing-page/NavbarLandingPage'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
    const clerkUser = await currentUser()

    if (clerkUser) redirect('/documents')
    return (
        <div className='overflow-y-auto custom-scrollbar h-[calc(100vh)]'>
            <div className='flex flex-col items-center w-full relative'>
                <NavbarLandingPage />
                <HeroSection />
                <Features />
                <Footer />
            </div>
        </div>
    )
}

export default page
