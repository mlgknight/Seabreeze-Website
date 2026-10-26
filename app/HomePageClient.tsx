'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/nav/Navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Footer from '../components/Footer';

export default function Home() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Layer 1 (Front - Secondary Color)
    const wave1Y = useTransform(scrollYProgress, [0, 1], [140, -180]);
    const wave1MobileY = useTransform(scrollYProgress, [0, 1], [24, -24]);
    const wave1X = useTransform(scrollYProgress, [0, 1], [-24, 24]);
    const wave1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.08, 0.98]);
    const wave1Rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

    // Layer 2 (Middle - Primary Color)
    const wave2Y = useTransform(scrollYProgress, [0, 1], [-80, 120]);
    const wave2X = useTransform(scrollYProgress, [0, 1], [18, -18]);
    const wave2Rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

    // Layer 3 (Back - Muted Accent Color)
    const wave3Y = useTransform(scrollYProgress, [0, 1], [30, -60]);
    const wave3X = useTransform(scrollYProgress, [0, 1], [-10, 10]);

    const offerings = [
        {
            title: 'Social Management',
            image: '/updated_photos/IMG_2746.jpeg',
        },
        {
            title: 'Brand Strategy',
            image: '/updated_photos/IMG_2795.jpeg',
        },
        {
            title: 'Creative Production',
            image: '/updated_photos/IMG_2616.jpeg',
        },
    ];

    return (
        <div className='bg-background text-foreground font-oldstandard min-h-screen selection:bg-primary selection:text-primary-foreground'>
            <header>
                {/* Hero Video Section */}
                <div className='relative flex h-[52svh] min-h-[25rem] w-full items-center justify-center overflow-hidden bg-primary md:h-[75vh] md:min-h-0 lg:h-[85vh]'>
                    <Image
                        src='/videos/beach2-poster.jpg'
                        alt=''
                        fill
                        sizes='100vw'
                        priority
                        aria-hidden='true'
                        className='object-cover'
                    />
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                        poster='/videos/beach2-poster.jpg'
                        className='absolute inset-0 w-full h-full object-cover'
                    >
                        <source src='/videos/beach2.mp4' type='video/mp4' />
                    </video>

                    <div className='absolute inset-0 bg-primary/40' />

                    <div className='relative z-10 flex h-full w-full flex-col items-center justify-center px-4 pt-12 text-center'>
                        <Image
                            src='/Seabreeze_Strategies_Logo/no_background2.png'
                            alt='Seabreeze Strategies Logo'
                            width={300}
                            height={300}
                            sizes='(max-width: 768px) 96px, (max-width: 1024px) 144px, 192px'
                            className='m-0 h-20 w-20 drop-shadow-lg sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-48 lg:w-48'
                            priority
                        />

                        <div className='flex flex-col text-[clamp(2.25rem,11vw,3.5rem)] font-bold leading-none text-primary-foreground drop-shadow-[0_20px_30px_rgba(0,0,0,0.65)] sm:text-6xl md:text-8xl lg:text-[7rem]'>
                            <span className='block tracking-wide md:tracking-wider'>
                                SEABREEZE
                            </span>
                            <span className='block text-[clamp(2rem,10vw,3.25rem)] sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem]'>
                                STRATEGIES
                            </span>
                            <span className='mt-2 text-lg font-light tracking-widest sm:text-2xl md:text-4xl'>
                                EST. 2026
                            </span>
                        </div>
                        <h1 className='mt-1 w-full max-w-xl text-balance px-2 text-base font-medium leading-tight tracking-wide text-white drop-shadow-md sm:mt-5 sm:text-lg md:text-xl'>
                            Social media management for small businesses in Wilmington, NC
                        </h1>
                    </div>
                </div>

                <Navigation />
            </header>

            <main className='flex min-h-screen w-full flex-col items-center bg-background text-foreground overflow-x-hidden'>
                {/* Section 1 */}
                <section className='grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-14 sm:px-6 sm:py-20 md:gap-16 md:py-32 lg:grid-cols-12'>
                    <div className='lg:col-span-7 z-10'>
                        <motion.div
                            initial={{ opacity: 1, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7 }}
                        >
                            <p className='mb-5 text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:mb-8 sm:tracking-[0.5em]'>
                                Est. 2026 — Based in Wilmington, NC
                            </p>

                            <h2 className='mb-7 text-balance text-4xl font-oldstandard leading-tight tracking-tight sm:mb-10 sm:text-5xl md:text-7xl md:tracking-tighter'>
                                <span className='block'>Helping small businesses</span>
                                <span className='block italic font-light'>make waves online.</span>
                            </h2>

                            <div className='h-px w-20 bg-border mb-10' />

                            <p className='text-base text-muted-foreground leading-relaxed max-w-md font-light'>
                                I help small businesses grow through creative storytelling,
                                intentional strategy, and authentic connection—turning
                                meaningful relationships into lasting growth.
                            </p>
                        </motion.div>
                    </div>

                    <div className='lg:col-span-5 relative'>
                        <motion.div
                            initial={{ opacity: 1, scale: 0.97 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.9 }}
                            className='relative aspect-[4/5] w-full overflow-hidden shadow-2xl rounded-sm group bg-card'
                        >
                            <div className='absolute inset-4 border border-card-foreground/40 z-10 pointer-events-none group-hover:inset-6 transition-all duration-700' />

                            <Image
                                src='/updated_photos/IMG_2763.jpeg'
                                alt='Founder Editorial'
                                fill
                                sizes='(max-width: 1024px) 100vw, 40vw'
                                className='object-cover cursor-pointer grayscale-20 group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105'
                            />
                        </motion.div>

                        <div className='z-20 absolute -bottom-10 -left-10 bg-card p-8 hidden md:block border border-border'>
                            <p className='font-oldstandard italic text-2xl'>Emma</p>
                            <p className='text-[8px] tracking-[0.3em] uppercase text-muted-foreground mt-2'>
                                Social Media Manager
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 2: Offerings */}
                <section className='w-full py-16 bg-muted'>
                    <div className='max-w-7xl mx-auto px-6'>
                        <div className='flex flex-col gap-6 md:flex-row md:justify-between md:items-end mb-10 border-b border-border pb-4'>
                            <div>
                                <h3 className='text-sm tracking-[0.5em] uppercase text-muted-foreground mb-4'>
                                    How we collaborate
                                </h3>
                                <p className='text-4xl md:text-6xl font-oldstandard italic'>
                                    The Offerings
                                </p>
                            </div>
                            <p className='text-sm font-mono text-muted-foreground'>
                                3 Ways We Support Your Brand
                            </p>
                        </div>

                        {/* Offerings Grid */}
                        <div className='cursor-pointer grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 items-stretch'>
                            {offerings.map((item, idx) => (
                                <div
                                    key={idx}
                                    className='group relative overflow-hidden rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.18)] aspect-square w-full'
                                >
                                    <div className='absolute inset-0'>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes='(max-width: 768px) 100vw, 33vw'
                                            className='object-cover transition duration-1000 ease-out group-hover:scale-105'
                                        />
                                    </div>
                                    <div className='absolute inset-0 bg-black/20 transition duration-700 ease-out group-hover:bg-black/65 z-20' />
                                    <div className='relative z-30 flex h-full flex-col items-center justify-center text-center p-6 text-white transition-all duration-700 ease-out group-hover:-translate-y-1'>
                                        <h4 className='text-lg md:text-3xl flex font-extrabold uppercase tracking-[0.2em] drop-shadow-[0_16px_30px_rgba(0,0,0,0.55)] transition-all duration-700 ease-out group-hover:scale-105'>
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Refined Scroll Wave Section */}
                <section
                    ref={ref}
                    className='relative flex w-full items-center justify-center overflow-hidden bg-background py-20 sm:py-24 md:py-36'
                >
                    {/* Background Wave - Layer 3 */}
                    <motion.div
                        style={{ y: wave3Y, x: wave3X }}
                        className='absolute -bottom-16 -left-[10%] w-[120%] h-80 md:h-[28rem] pointer-events-none z-0 opacity-[0.15]'
                    >
                        <svg
                            viewBox='0 0 1440 320'
                            preserveAspectRatio='none'
                            className='w-full h-full text-muted-foreground fill-current'
                        >
                            <path d='M0,96C288,180 576,64 864,128C1152,192 1296,128 1440,64L1440,320L0,320Z' />
                        </svg>
                    </motion.div>

                    {/* Middle Wave - Layer 2 */}
                    <motion.div
                        style={{
                            y: wave2Y,
                            x: wave2X,
                            rotate: wave2Rotate,
                        }}
                        className='absolute -bottom-16 -left-[15%] w-[130%] h-80 md:h-[28rem] lg:h-[30rem] pointer-events-none z-0 opacity-25 origin-bottom'
                    >
                        <svg
                            viewBox='0 0 1440 320'
                            preserveAspectRatio='none'
                            className='w-full h-full text-primary fill-current'
                        >
                            <path d='M0,160C320,260 420,20 740,160C1060,300 1140,80 1440,160L1440,320L0,320Z' />
                        </svg>
                    </motion.div>

                    {/* Foreground Wave - Layer 1 */}
                    <div
                        className='pointer-events-none absolute bottom-0 left-0 z-0 h-56 w-full md:hidden'
                        aria-hidden='true'
                    >
                        <svg
                            viewBox='0 0 1440 320'
                            preserveAspectRatio='none'
                            className='h-full w-full fill-[#afccd1]'
                        >
                            <path d='M0,80C288,210 576,15 864,105C1152,200 1296,85 1440,70L1440,320L0,320Z' />
                        </svg>
                    </div>

                    <motion.div
                        style={{ y: wave1MobileY, x: wave1X, scale: wave1Scale }}
                        className='pointer-events-none absolute -bottom-3 -left-[8%] z-0 h-48 w-[116%] origin-bottom opacity-30 md:hidden'
                        aria-hidden='true'
                    >
                        <svg
                            viewBox='0 0 1440 320'
                            preserveAspectRatio='none'
                            className='h-full w-full fill-[#afccd1]'
                        >
                            <path d='M0,96C288,210 576,40 864,130C1152,220 1296,100 1440,80L1440,320L0,320Z' />
                        </svg>
                    </motion.div>

                    <motion.div
                        style={{
                            y: wave1Y,
                            x: wave1X,
                            scale: wave1Scale,
                            rotate: wave1Rotate,
                        }}
                        className='pointer-events-none absolute -bottom-16 -left-[20%] z-0 hidden h-80 w-[140%] origin-bottom opacity-50 md:block md:h-[28rem] lg:h-[32rem]'
                    >
                        <svg
                            viewBox='0 0 1440 320'
                            preserveAspectRatio='none'
                            className='w-full h-full text-secondary fill-current drop-shadow-[0_-8px_20px_rgba(0,0,0,0.06)]'
                        >
                            <path d='M0,224C320,320 420,80 740,224C1060,360 1140,100 1440,224L1440,320L0,320Z' />
                        </svg>
                    </motion.div>

                    {/* Content Card */}
                    <div className='relative z-10 flex w-full max-w-5xl flex-col items-center justify-center gap-6 px-4 text-center sm:px-8'>
                        <motion.div
                            initial={{ opacity: 1, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7 }}
                            className='flex w-full flex-col items-center gap-3'
                        >
                            <span className='text-xs font-mono tracking-[0.35em] uppercase text-muted-foreground'>
                                Let Us Connect
                            </span>

                            <h2 className='max-w-full text-balance font-oldstandard text-3xl italic leading-tight tracking-tight text-primary drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
                                Let&apos;s make waves together
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 1, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Link
                                href='/inquire'
                                className='inline-flex items-center gap-3 bg-primary text-primary-foreground px-9 py-4 rounded-full font-mono text-xs uppercase tracking-[0.25em] shadow-lg hover:shadow-xl hover:bg-primary/95 transition-all duration-300 border border-primary-foreground/15'
                            >
                                Contact
                                <span className='text-base leading-none'>→</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}