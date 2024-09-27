"use client"

import React from 'react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BackgroundLines } from '../ui/background-lines';

const HeroSection = () => {
    const colors = [
        '#FF6B6B', // soft red
        '#FF8E72', // coral
        '#FFAD61', // orange
        '#FFD85A', // golden yellow
        '#C0E76A', // light green
        '#6BCB77', // green
        '#4D96FF', // blue
        '#3A86FF', // deep blue
        '#8366FF', // violet
        '#C17DFF', // light purple
        '#FF5D8F'  // pinkish red
    ];

    const secondColors = [
        '#4D96FF', // blue
    '#C0E76A', // light green
    '#FF5D8F', // pinkish red
    '#FFD85A', // golden yellow
    '#FF8E72', // coral
    '#6BCB77', // green
    '#3A86FF', // deep blue
    '#8366FF', // violet
    '#FF6B6B', // soft red
    '#FFAD61', // orange
    '#C17DFF'  // light purple
    ]

    return (
        <BackgroundLines className='min-h-screen bg-gradient-to-b from-[#09111F] to-[#0e1a2e] w-full flex justify-center items-center relative overflow-hidden px-5'>
            <div className='flex flex-col items-center gap-3 z-10'>
                <motion.h1
                    className='sm:text-[72px] text-[32px] font-bold text-center sm:max-w-[1200px]'
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 100, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: "linear",
                    }}
                    viewport={{ once: true }}
                >
                    Write <span className='text-[#43BBFF]'>together</span>, stay <span className='text-[#E5FF43]'>connected</span>,
                    get things <span className='text-[#43FF6C]'>done</span>
                </motion.h1>

                <motion.div
                    className='flex items-center gap-4 mt-4'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 100, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: "linear",
                    }}
                    viewport={{ once: true }}>
                    <Link href='/documents'>
                        <Button className='bg-gray-50 text-slate-900 sm:text-[20px] text-[18px] !py-6 sm:!px-8 font-medium hover:bg-gray-300 transition-all duration-300'>Start now</Button>
                    </Link>
                    <Link href="#features">
                        <Button className='bg-transparent border-2 border-gray-50 sm:text-[20px] text-[18px] !py-6 sm:!px-8 font-medium hover:bg-gray-50 hover:text-slate-900 transition-all duration-300'>
                            Features
                        </Button>
                    </Link>
                </motion.div>
            </div>

            <div className='absolute bottom-0 flex flex-col gap-2 overflow-hidden'>
                <div className='flex gap-2'>
                    <motion.div
                        className='flex gap-2'
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 50,
                            ease: "linear",
                        }} >
                        {Array.from({ length: 11 }).map((_, idx) => {
                            const color = colors[idx % colors.length];

                            return (
                                <div
                                    style={{ backgroundColor: color }}
                                    className={`sm:w-[150px] sm:h-[50px] w-[90px] h-[50px] sm:rounded-[12px] rounded-[8px]`}
                                    key={idx}
                                />
                            )
                        })}
                    </motion.div>
                    <motion.div
                        className='flex gap-2'
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 50,
                            ease: "linear",
                        }} >
                        {Array.from({ length: 11 }).map((_, idx) => {
                            const color = colors[idx % colors.length];

                            return (
                                <div
                                    style={{ backgroundColor: color }}
                                    className={`sm:w-[150px] sm:h-[50px] w-[90px] h-[50px] sm:rounded-[12px] rounded-[8px]`}
                                    key={idx}
                                />
                            )
                        })}
                    </motion.div>
                    <motion.div
                        className='flex gap-2'
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 50,
                            ease: "linear",
                        }} >
                        {Array.from({ length: 11 }).map((_, idx) => {
                            const color = colors[idx % colors.length];

                            return (
                                <div
                                    style={{ backgroundColor: color }}
                                    className={`sm:w-[150px] sm:h-[50px] w-[90px] h-[50px] sm:rounded-[12px] rounded-[8px]`}
                                    key={idx}
                                />
                            )
                        })}
                    </motion.div>
                    <motion.div
                        className='flex gap-2'
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 50,
                            ease: "linear",
                        }} >
                        {Array.from({ length: 11 }).map((_, idx) => {
                            const color = colors[idx % colors.length];

                            return (
                                <div
                                    style={{ backgroundColor: color }}
                                    className={`sm:w-[150px] sm:h-[50px] w-[90px] h-[50px] sm:rounded-[12px] rounded-[8px]`}
                                    key={idx}
                                />
                            )
                        })}
                    </motion.div>
                    <motion.div
                        className='flex gap-2'
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 50,
                            ease: "linear",
                        }} >
                        {Array.from({ length: 11 }).map((_, idx) => {
                            const color = colors[idx % colors.length];

                            return (
                                <div
                                    style={{ backgroundColor: color }}
                                    className={`sm:w-[150px] sm:h-[50px] w-[90px] h-[50px] sm:rounded-[12px] rounded-[8px]`}
                                    key={idx}
                                />
                            )
                        })}
                    </motion.div>
                </div>
                <div className='flex gap-2'>
                    <motion.div
                        className='flex gap-2'
                        initial={{ x: 0 }}
                        animate={{ x: "100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 60,
                            ease: "linear",
                        }} >
                        {Array.from({ length: 11 }).map((_, idx) => {
                            const color = colors[idx % colors.length];

                            return (
                                <div
                                    style={{ backgroundColor: color }}
                                    className={`sm:w-[150px] sm:h-[50px] w-[90px] h-[50px] sm:rounded-[12px] rounded-[8px]`}
                                    key={idx}
                                />
                            )
                        })}
                    </motion.div>
                    <motion.div
                        className='flex gap-2'
                        initial={{ x: 0 }}
                        animate={{ x: "100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 60,
                            ease: "linear",
                        }} >
                        {Array.from({ length: 11 }).map((_, idx) => {
                            const color = colors[idx % colors.length];

                            return (
                                <div
                                    style={{ backgroundColor: color }}
                                    className={`sm:w-[150px] sm:h-[50px] w-[90px] h-[50px] sm:rounded-[12px] rounded-[8px]`}
                                    key={idx}
                                />
                            )
                        })}
                    </motion.div>
                    <motion.div
                        className='flex gap-2'
                        initial={{ x: 0 }}
                        animate={{ x: "100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 60,
                            ease: "linear",
                        }} >
                        {Array.from({ length: 11 }).map((_, idx) => {
                            const color = colors[idx % colors.length];

                            return (
                                <div
                                    style={{ backgroundColor: color }}
                                    className={`sm:w-[150px] sm:h-[50px] w-[90px] h-[50px] sm:rounded-[12px] rounded-[8px]`}
                                    key={idx}
                                />
                            )
                        })}
                    </motion.div>
                    <motion.div
                        className='flex gap-2'
                        initial={{ x: 0 }}
                        animate={{ x: "100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 60,
                            ease: "linear",
                        }} >
                        {Array.from({ length: 11 }).map((_, idx) => {
                            const color = colors[idx % colors.length];

                            return (
                                <div
                                    style={{ backgroundColor: color }}
                                    className={`sm:w-[150px] sm:h-[50px] w-[90px] h-[50px] sm:rounded-[12px] rounded-[8px]`}
                                    key={idx}
                                />
                            )
                        })}
                    </motion.div>
                    <motion.div
                        className='flex gap-2'
                        initial={{ x: 0 }}
                        animate={{ x: "100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 60,
                            ease: "linear",
                        }} >
                        {Array.from({ length: 11 }).map((_, idx) => {
                            const color = colors[idx % colors.length];

                            return (
                                <div
                                    style={{ backgroundColor: color }}
                                    className={`sm:w-[150px] sm:h-[50px] w-[90px] h-[50px] sm:rounded-[12px] rounded-[8px]`}
                                    key={idx}
                                />
                            )
                        })}
                    </motion.div>
                </div>
                <div className='flex gap-2 sm:hidden'>
                    <motion.div
                        className='flex gap-2'
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 50,
                            ease: "linear",
                        }} >
                        {Array.from({ length: 11 }).map((_, idx) => {
                            const color = secondColors[idx % colors.length];

                            return (
                                <div
                                    style={{ backgroundColor: color }}
                                    className={`sm:w-[150px] sm:h-[50px] w-[90px] h-[50px] sm:rounded-[12px] rounded-[8px]`}
                                    key={idx}
                                />
                            )
                        })}
                    </motion.div>
                    <motion.div
                        className='flex gap-2'
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 50,
                            ease: "linear",
                        }} >
                        {Array.from({ length: 11 }).map((_, idx) => {
                            const color = secondColors[idx % colors.length];

                            return (
                                <div
                                    style={{ backgroundColor: color }}
                                    className={`sm:w-[150px] sm:h-[50px] w-[90px] h-[50px] sm:rounded-[12px] rounded-[8px]`}
                                    key={idx}
                                />
                            )
                        })}
                    </motion.div>
                    <motion.div
                        className='flex gap-2'
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 50,
                            ease: "linear",
                        }} >
                        {Array.from({ length: 11 }).map((_, idx) => {
                            const color = secondColors[idx % colors.length];

                            return (
                                <div
                                    style={{ backgroundColor: color }}
                                    className={`sm:w-[150px] sm:h-[50px] w-[90px] h-[50px] sm:rounded-[12px] rounded-[8px]`}
                                    key={idx}
                                />
                            )
                        })}
                    </motion.div>
                    <motion.div
                        className='flex gap-2'
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 50,
                            ease: "linear",
                        }} >
                        {Array.from({ length: 11 }).map((_, idx) => {
                            const color = secondColors[idx % colors.length];

                            return (
                                <div
                                    style={{ backgroundColor: color }}
                                    className={`sm:w-[150px] sm:h-[50px] w-[90px] h-[50px] sm:rounded-[12px] rounded-[8px]`}
                                    key={idx}
                                />
                            )
                        })}
                    </motion.div>
                    <motion.div
                        className='flex gap-2'
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 50,
                            ease: "linear",
                        }} >
                        {Array.from({ length: 11 }).map((_, idx) => {
                            const color = secondColors[idx % colors.length];

                            return (
                                <div
                                    style={{ backgroundColor: color }}
                                    className={`sm:w-[150px] sm:h-[50px] w-[90px] h-[50px] sm:rounded-[12px] rounded-[8px]`}
                                    key={idx}
                                />
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </BackgroundLines>
    )
}

export default HeroSection
