'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = ['About', 'Services', 'Inquire', 'FAQ'];

export default function Navigation() {
	const [open, setOpen] = useState(false);

	// Split items for the desktop layout: 2 on left, 2 on right
	const leftNav = navItems.slice(0, 2);
	const rightNav = navItems.slice(2, 4);

	return (
		<nav className='fixed flex top-0 left-0 w-full h-25 z-[100] bg-[#F9F7F2]/80 backdrop-blur-md border-b border-[#2A2A2A]/5 py-6 md:py-10 transition-all duration-300'>
			<div className='max-w-7xl mx-auto px-6 flex items-center justify-between md:justify-center'>
				{/* Mobile Brand Label (Only visible on small screens) */}
				<div className='md:hidden text-4xl tracking-[0.4em] font-bold uppercase'>
					Seabreeze
				</div>

				{/* Desktop Centered Menu */}
				<div className='hidden md:flex items-center gap-12 lg:gap-16'>
					{/* Left Side Links */}
					<div className='flex gap-8 lg:gap-12'>
						{leftNav.map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								className='text-md tracking-[0.4em] uppercase font-bold text-stone-600 hover:text-black hover:italic transition-all'
							>
								{item}
							</a>
						))}
					</div>

					{/* Centered Logo */}
					<div className='px-4'>
						<Image
							src='/Seabreeze_Strategies_Logo/no_background2.png'
							alt='Seabreeze Logo'
							width={45}
							height={45}
							className=' w-20 grayscale brightness-0 opacity-90'
							priority
						/>
					</div>

					{/* Right Side Links */}
					<div className='flex gap-8 lg:gap-12'>
						{rightNav.map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								className='text-md tracking-[0.4em] uppercase font-bold text-stone-600 hover:text-black hover:italic transition-all'
							>
								{item}
							</a>
						))}
					</div>
				</div>

				{/* Mobile Menu Trigger */}
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild className='md:hidden'>
						<Button
							variant='ghost'
							size='icon'
							className='hover:bg-transparent'
						>
							<Menu className='h-5 w-5 stroke-[1.5px]' />
							<span className='sr-only'>Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent
						side='top'
						className='w-full h-full bg-[#F9F7F2] border-none pt-24'
					>
						<nav className=' flex flex-col items-center gap-10'>
							<Image
								src='/Seabreeze_Strategies_Logo/no_background2.png'
								alt='Logo'
								width={100}
								height={100}
								className='grayscale brightness-0 mb-8'
							/>
							{navItems.map((item) => (
								<a
									key={item}
									href={`#${item.toLowerCase()}`}
									onClick={() => setOpen(false)}
									className='text-3xl font-oldstandard italic hover:text-stone-400 transition-colors'
								>
									{item}
								</a>
							))}
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
}
