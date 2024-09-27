"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const FeatureItems = ({ title, imgUrl }: { title: string, imgUrl: string }) => {
    const transform = [30, -30, 30, -30]
    const transformOrder = transform[Math.floor(Math.random() * transform.length)]

    return (
        <motion.div
            className='sm:flex flex-col items-center sm:gap-8 gap-4 hidden'
            initial={{ opacity: 0, x: transformOrder }}
            whileInView={{ opacity: 100, x: 0 }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "linear",
            }}
            viewport={{ once: true }}>
            <h1 className='text-[24px] text-center sm:text-[36px] sm:font-semibold font-medium'>
                {title}
            </h1>
            <Image src={imgUrl} alt='image of feature' width={1100} height={1100} loading='lazy' quality={100} sizes='110vw'/>
        </motion.div>
    )
}

export default FeatureItems
