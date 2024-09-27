import React from 'react'
import FeatureItems from './FeatureItems'
import FeatureItemsMobile from './FeatureItemsMobile'

const Features = () => {
    return (
        <section className='flex flex-col items-center sm:gap-32 gap-14 min-h-screen w-full py-20 px-5 overflow-hidden' id="features">
            <FeatureItems title='Organize with ease. Stay focused.' imgUrl='/assets/images/feature-1.png' />
            <FeatureItems title='Collaborate seamlessly. Empower your team.' imgUrl='/assets/images/feature-2.png' />
            <FeatureItems title='Work together, always stay in sync.' imgUrl='/assets/images/feature-3.png' />
            <FeatureItems title='Stay informed. Never miss a beat.' imgUrl='/assets/images/feature4.png' />

            <FeatureItemsMobile title='Organize with ease. Stay focused.' imgUrl='/assets/images/feature1-mobile.png' />
            <FeatureItemsMobile title='Collaborate seamlessly. Empower your team.' imgUrl='/assets/images/feature2-mobile-censored.png' />
            <FeatureItemsMobile title='Work together, always stay in sync.' imgUrl='/assets/images/feature3-mobile.png' />
            <FeatureItemsMobile title='Stay informed. Never miss a beat.' imgUrl='/assets/images/feature4-mobile.png' />
        </section>
    )
}

export default Features
