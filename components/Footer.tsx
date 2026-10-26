'use client';

import { Instagram, MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='relative z-20 w-full bg-primary text-white border-t border-white/20 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]'>
			{/* Main Footer Container */}
			<div className='w-full px-4 py-10 sm:px-6 md:px-6 lg:px-8 lg:py-16'>
				<div className='mx-auto flex max-w-7xl flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left'>
					{/* Left: Brand / Logo Column */}
					<div className='flex flex-col items-center gap-5 text-center lg:items-start lg:text-left lg:w-2/5'>
						<Link
							href='/'
							className='group flex w-fit items-center gap-3 text-center lg:gap-4'
						>
							<Image
								src='/Seabreeze_Strategies_Logo/no_background2.png'
								alt='Seabreeze Strategies Logo'
								width={160}
								height={160}
								sizes='(max-width: 768px) 56px, 160px'
								quality={100}
								className='h-14 w-14 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.22)] transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_14px_28px_rgba(0,0,0,0.32)] md:h-40 md:w-40'
								priority
							/>
							<span className='text-3xl font-bold leading-none tracking-tight text-white md:text-4xl'>
								Seabreeze
								<br />
								<span className='text-2xl font-light italic text-white/90 md:text-3xl'>
									Strategies
								</span>
							</span>
						</Link>

						<p className='max-w-sm text-base font-light leading-relaxed tracking-wide text-white/80 md:text-lg'>
							Helping small businesses make waves online through storytelling,
							strategy, and authentic connection.
						</p>
					</div>

					{/* Right: Navigation + Contact Columns */}
					<div className='grid w-full max-w-xl grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:text-left lg:w-3/5 lg:max-w-none lg:justify-items-end'>
						{/* Navigation Column */}
						<div className='flex flex-col items-center gap-4 sm:items-start'>
							<h3 className='text-sm font-semibold uppercase tracking-[0.3em] text-white/60'>
								Navigation
							</h3>
							<nav className='flex flex-col items-center gap-3 sm:items-start'>
								{[
									{ label: 'Home', href: '/' },
									{ label: 'About', href: '/about' },
									{ label: 'Services', href: '/services' },
									{ label: 'Inquire', href: '/inquire' },
									{ label: 'FAQ', href: '/faq' },
								].map(({ label, href }) => (
									<Link
										key={label}
										href={href}
										className='w-fit text-base text-white/80 transition-all duration-300 hover:translate-x-1 hover:text-white sm:text-left'
									>
										{label}
									</Link>
								))}
							</nav>
						</div>

						{/* Contact & Social Column */}
						<div className='flex flex-col items-center gap-4 sm:items-start'>
							<h3 className='text-base font-semibold uppercase tracking-[0.3em] text-white/60'>
								Connect
							</h3>
							<div className='flex flex-col items-center gap-3 text-base sm:items-start'>
								<a
									href='mailto:emma.gordon2704@gmail.com'
									className='w-fit text-base text-white/80 transition-all duration-300 hover:translate-x-1 hover:text-white'
								>
									emma.gordon2704@gmail.com
								</a>

								<a
									href='tel:+13213399807'
									className='w-fit text-base text-white/80 transition-all duration-300 hover:translate-x-1 hover:text-white'
								>
									(321) 339-9807
								</a>

								<p className='text-base leading-relaxed font-light text-white/60'>
									Wilmington, North Carolina
								</p>
							</div>

							{/* Social Badges */}
							<div className='flex items-center justify-center gap-3 border-t border-secondary-foreground/15 pt-3 sm:justify-start'>
								<a
									href='https://instagram.com/seabreezestrategies'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Instagram seabreezestrategies'
									className='flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white/80 transition-all duration-200 hover:border-white/60 hover:bg-white/10 hover:text-white'
								>
									<Instagram className='h-4 w-4' />
								</a>

								<a
									href='mailto:emma.gordon2704@gmail.com'
									aria-label='Email Emma Gordon'
									className='flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white/80 transition-all duration-200 hover:border-white/60 hover:bg-white/10 hover:text-white'
								>
									<MailIcon className='h-4 w-4' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className='w-full bg-secondary px-3 py-4 text-secondary-foreground border-t border-secondary-foreground/10 md:px-6'>
				<div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left'>
					<p className='text-base font-bolder tracking-wide'>
						© 2026 Seabreeze Strategies. All rights reserved.
					</p>
					<p className='text-sm font-bolder font-light uppercase tracking-widest opacity-80'>
						Helping small businesses make waves online.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
