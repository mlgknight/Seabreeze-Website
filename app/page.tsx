'use client';

import Image from 'next/image';
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

	const waveY = useTransform(scrollYProgress, [0, 1], [0, -120]);
	const waveX = useTransform(scrollYProgress, [0, 1], [0, 40]);

	return (
		<div className='bg-background text-foreground font-sans'>
			<header>
				{/* Hero Video Section */}
				<div className='relative w-full h-200 flex items-center justify-center overflow-hidden bg-primary'>
					<video
						autoPlay
						muted
						loop
						playsInline
						className='absolute inset-0 w-full h-full object-cover'
					>
						<source src='/videos/beach2.mp4' type='video/mp4' />
					</video>

					<div className='absolute inset-0 bg-primary/40'></div>

					<div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-4'>
						<Image
							src='/Seabreeze_Strategies_Logo/no_background2.png'
							alt='Logo'
							width={300}
							height={300}
							className='w-24 h-24 md:w-35 md:h-35 m-0 drop-shadow-lg'
							priority
						/>

						<h1 className='text-primary-foreground font-oldstandard font-bold text-5xl md:text-7xl drop-shadow-xl'>
							SEABREEZE <br /> <span className='text-6xl'>STRATEGIES</span>
							<br />
							<span className='text-2xl md:text-2xl tracking-widest font-light'>
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
								<span className='italic font-light'>
									through intentional
								</span>{' '}
								<br />
								storytelling.
							</h2>

							<div className='h-px w-20 bg-border mb-10'></div>

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
							<div className='absolute inset-4 border border-card-foreground/20 z-10 pointer-events-none group-hover:inset-6 transition-all duration-700'></div>

							<Image
								src='/emma.png'
								alt='Founder Editorial'
								fill
								className='object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105'
								priority
							/>
						</motion.div>

						<div className='z-20 absolute -bottom-10 -left-10 bg-card p-8 hidden md:block border border-border'>
							<p className=' font-oldstandard italic text-2xl'>Emma</p>
							<p className='text-[8px] tracking-[0.3em] uppercase text-muted-foreground mt-2'>
								Social Media Manager
							</p>
						</div>
					</div>
				</section>

				{/* Section 2 */}
				<section className='w-full py-32 bg-muted'>
					<div className='max-w-5xl mx-auto px-6'>
						<div className='flex justify-between items-end mb-20 border-b border-border pb-10'>
							<div>
								<h3 className='text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-4'>
									How we collaborate
								</h3>
								<p className='text-4xl md:text-6xl font-oldstandard italic'>
									The Offerings
								</p>
							</div>
							<p className='text-[10px] font-mono text-muted-foreground'>
								01 — 03
							</p>
						</div>

						<div className='flex flex-col'>
							{[
								{
									num: '01',
									title: 'Social Management',
									desc: 'Full-service handling of your digital ecosystem, from strategy and curation to community engagement.',
								},
								{
									num: '02',
									title: 'Brand Strategy',
									desc: 'A deep-dive tactical blueprint designed to align your brand identity with your ideal dream client.',
								},
								{
									num: '03',
									title: 'Content Creation',
									desc: 'High-end aesthetic visuals, short-form video production, and copy that speaks your brand’s soul.',
								},
							].map((s, idx) => (
								<motion.div
									key={idx}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: idx * 0.1 }}
									className='group border-b border-border py-12 flex flex-col md:flex-row md:items-center gap-8 hover:bg-background/50 transition-colors px-4'
								>
									<span className='text-[10px] font-mono text-muted-foreground pt-1'>
										{s.num}
									</span>
									<div className='flex-1'>
										<h4 className='text-3xl md:text-5xl font-oldstandard uppercase tracking-tighter group-hover:italic transition-all duration-500'>
											{s.title}
										</h4>
									</div>
									<p className='text-xs text-muted-foreground max-w-75 leading-relaxed uppercase tracking-widest font-light'>
										{s.desc}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Scroll Wave Section */}
				<section
					ref={ref}
					className='relative w-full h-[70vh] bg-background overflow-hidden flex items-center justify-center'
				>
					<motion.div
						style={{ y: waveY, x: waveX }}
						className='absolute inset-0'
					>
						<svg
							viewBox='0 0 1440 320'
							className='w-full h-full opacity-40 text-secondary'
						>
							<path
								fill='currentColor'
								d='
                  M0,160
                  C240,220 480,100 720,160
                  C960,220 1200,120 1440,180
                  L1440,320 L0,320 Z
                '
							/>
						</svg>
					</motion.div>

					<div className='relative z-10 text-center px-6'>
						<h1 className='text-[6vw] md:text-[4vw] font-oldstandard italic uppercase tracking-tight text-primary'>
							The Wave Moves With You
						</h1>
						<p className='mt-4 text-sm md:text-base text-muted-foreground max-w-md mx-auto'>
							The tide moves with you
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
