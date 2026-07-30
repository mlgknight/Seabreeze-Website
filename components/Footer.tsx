'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='relative z-20 w-full bg-secondary text-secondary-foreground border-t border-secondary-foreground/20 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]'>
			{/* Main Footer Container */}
			<div className='w-full px-6 md:px-12 lg:px-16 py-16 lg:py-20'>
				<div className='max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-16'>
					{/* Left: Brand / Logo Column */}
					<div className='flex flex-col gap-6 lg:w-2/5'>
						<Link href='/' className='flex items-center gap-4 group w-fit'>
							<Image
								src='/Seabreeze_Strategies_Logo/no_background2.png'
								alt='Seabreeze Strategies Logo'
								width={120}
								height={120}
								className='w-14 h-14 md:w-20 md:h-20 drop-shadow-md transition-transform duration-500 group-hover:scale-105'
								priority
							/>
							<span className='font-oldstandard text-2xl md:text-3xl font-bold leading-none tracking-tight text-secondary-foreground'>
								Seabreeze
								<br />
								<span className='font-light italic text-xl md:text-2xl opacity-90'>
									Strategies
								</span>
							</span>
						</Link>

						<p className='text-sm md:text-base opacity-80 leading-relaxed max-w-sm font-light tracking-wide'>
							Guiding brands through the digital landscape with intentional
							storytelling and effortless coastal grace.
						</p>

						<div className='text-xs font-mono tracking-widest uppercase opacity-60 mt-2'>
							Est. 2026 — Based in Wilmington, NC
						</div>
					</div>

					{/* Right: Navigation + Contact Columns */}
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-10 lg:w-3/5 lg:justify-items-end'>
						{/* Navigation Column */}
						<div className='flex flex-col gap-4'>
							<h3 className='text-xs font-semibold uppercase tracking-[0.3em] opacity-60 text-secondary-foreground'>
								Navigation
							</h3>
							<nav className='flex flex-col gap-2.5'>
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
										className='text-sm opacity-80 hover:opacity-100 hover:translate-x-1 transition-all duration-300 w-fit'
									>
										{label}
									</Link>
								))}
							</nav>
						</div>

						{/* Contact & Social Column */}
						<div className='flex flex-col gap-4'>
							<h3 className='text-xs font-semibold uppercase tracking-[0.3em] opacity-60 text-secondary-foreground'>
								Connect
							</h3>
							<div className='flex flex-col gap-2.5 text-sm'>
								<a
									href='mailto:hello@seabreezestrategies.com'
									className='opacity-80 hover:opacity-100 hover:translate-x-1 transition-all duration-300 w-fit'
								>
									hello@seabreezestrategies.com
								</a>

								<a
									href='tel:+13213399807'
									className='opacity-80 hover:opacity-100 hover:translate-x-1 transition-all duration-300 w-fit'
								>
									(321) 339-9807
								</a>

								<p className='opacity-60 leading-relaxed font-light'>
									Wilmington, North Carolina
								</p>
							</div>

							{/* Social Badges */}
							<div className='flex items-center gap-4 mt-3 pt-3 border-t border-secondary-foreground/15'>
								{[
									{ label: 'Instagram', href: 'https://instagram.com' },
									{ label: 'LinkedIn', href: 'https://linkedin.com' },
									{ label: 'Facebook', href: 'https://facebook.com' },
								].map(({ label, href }) => (
									<a
										key={label}
										href={href}
										target='_blank'
										rel='noopener noreferrer'
										className='text-xs font-medium uppercase tracking-widest opacity-60 hover:opacity-100 hover:underline underline-offset-4 transition-all duration-200'
									>
										{label}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className='w-full bg-primary text-primary-foreground px-6 md:px-12 py-5 border-t border-primary-foreground/10'>
				<div className='max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left'>
					<p className='text-sm font-oldstandard tracking-wide'>
						© {year} Seabreeze Strategies. All rights reserved.
					</p>
					<p className='text-xs font-light tracking-widest uppercase opacity-80'>
						Crafting digital success, one wave at a time.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
