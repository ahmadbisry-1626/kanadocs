import Features from '@/components/landing-page/Features'
import Footer from '@/components/landing-page/Footer'
import HeroSection from '@/components/landing-page/HeroSection'
import NavbarLandingPage from '@/components/landing-page/NavbarLandingPage'
import React from 'react'

const page = () => {
    return (
        <div className='overflow-y-auto custom-scrollbar h-[calc(100vh-10px)]'>
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
