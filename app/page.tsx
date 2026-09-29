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
    const wave1X = useTransform(scrollYProgress, [0, 1], [-80, 80]);
    const wave1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1.08, 0.98]);
    const wave1Rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

    // Layer 2 (Middle - Primary Color)
    const wave2Y = useTransform(scrollYProgress, [0, 1], [-80, 120]);
    const wave2X = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const wave2Rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

    // Layer 3 (Back - Muted Accent Color)
    const wave3Y = useTransform(scrollYProgress, [0, 1], [30, -60]);
    const wave3X = useTransform(scrollYProgress, [0, 1], [-30, 30]);

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
                <div className='relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center overflow-hidden bg-primary'>
                    <video
                        autoPlay
                        muted
                        playsInline
                        preload='auto'
                        onEnded={(e) => {
                            const v = e.currentTarget as HTMLVideoElement;
                            v.currentTime = 0;
                            v.play().catch(() => {});
                        }}
                        className='absolute inset-0 w-full h-full object-cover'
                    >
                        <source src='/videos/beach2.mp4' type='video/mp4' />
                    </video>

                    <div className='absolute inset-0 bg-primary/40' />

                    <div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-4'>
                        <Image
                            src='/Seabreeze_Strategies_Logo/no_background2.png'
                            alt='Seabreeze Strategies Logo'
                            width={300}
                            height={300}
                            className='w-24 md:w-36 md:h-36 lg:w-48 lg:h-48 m-0 drop-shadow-lg'
                            priority
                        />

                        <h1 className='drop-shadow-[0_20px_30px_rgba(0,0,0,0.65)] flex flex-col text-primary-foreground font-bold text-6xl md:text-8xl lg:text-[7rem] leading-none'>
                            <span className='block tracking-wide md:tracking-wider'>
                                SEABREEZE
                            </span>
                            <span className='block text-7xl md:text-[6.5rem] lg:text-[7.5rem]'>
                                STRATEGIES
                            </span>
                            <span className='text-2xl md:text-4xl tracking-widest font-light mt-2'>
                                EST. 2026
                            </span>
                        </h1>
                    </div>
                </div>

                <Navigation />
            </header>

            <main className='flex min-h-screen w-full flex-col items-center bg-background text-foreground overflow-x-hidden'>
                {/* Section 1 */}
                <section className='w-full max-w-7xl px-6 py-24 md:py-40 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center'>
                    <div className='lg:col-span-7 z-10'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <p className='text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-8'>
                                Est. 2026 — Based in Wilmington, NC
                            </p>

                            <h2 className='text-5xl md:text-7xl font-oldstandard leading-[1.1] mb-10 tracking-tighter'>
                                Elevating your brand <br />
                                <span className='italic font-light'>through intentional</span>
                                <br />
                                storytelling.
                            </h2>

                            <div className='h-px w-20 bg-border mb-10' />

                            <p className='text-base text-muted-foreground leading-relaxed max-w-md font-light uppercase tracking-wider'>
                                At Seabreeze Strategies, we don’t just post content. We build
                                digital presences that feel as refreshing and effortless as a
                                coastal breeze. Boutique, bespoke, and results-driven.
                            </p>
                        </motion.div>
                    </div>

                    <div className='lg:col-span-5 relative'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            className='relative aspect-4/5 w-full overflow-hidden shadow-2xl rounded-sm group bg-card'
                        >
                            <div className='absolute inset-4 border border-card-foreground/40 z-10 pointer-events-none group-hover:inset-6 transition-all duration-700' />

                            <Image
                                src='/updated_photos/IMG_2763.jpeg'
                                alt='Founder Editorial'
                                fill
                                className='object-cover cursor-pointer grayscale-20 group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105'
                                priority
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
                <section className='w-full py-13 bg-muted'>
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

                        {/* Square / Boxy Offerings Grid */}
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
                                            className='object-cover transition duration-1000 ease-out group-hover:scale-105'
                                            priority
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
                    className='relative w-full py-28 md:py-36 bg-background overflow-hidden flex items-center justify-center'
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
                    <motion.div
                        style={{
                            y: wave1Y,
                            x: wave1X,
                            scale: wave1Scale,
                            rotate: wave1Rotate,
                        }}
                        className='absolute -bottom-16 -left-[20%] w-[140%] h-80 md:h-[28rem] lg:h-[32rem] pointer-events-none z-0 opacity-50 origin-bottom'
                    >
                        <svg
                            viewBox='0 0 1440 320'
                            preserveAspectRatio='none'
                            className='w-full h-full text-secondary fill-current drop-shadow-[0_-8px_20px_rgba(0,0,0,0.06)]'
                        >
                            <path d='M0,224C320,320 420,80 740,224C1060,360 1140,100 1440,224L1440,320L0,320Z' />
                        </svg>
                    </motion.div>

                    {/* Cleaned Content Card */}
                    <div className='relative z-10 max-w-5xl text-center px-4 md:px-8 flex flex-col items-center justify-center gap-6'>
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='flex flex-col items-center gap-3 w-full'
                        >
                            <span className='text-xs font-mono tracking-[0.35em] uppercase text-muted-foreground'>
                                Let Us Connect
                            </span>

                            {/* Straight Unbroken Heading */}
                            <h2 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-oldstandard italic tracking-tight text-primary drop-shadow-sm leading-none whitespace-nowrap'>
                                The Tide Moves With You
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
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