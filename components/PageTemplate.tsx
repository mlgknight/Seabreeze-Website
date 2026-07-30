import Image from 'next/image';
import Navigation from '@/components/nav/Navigation';
import Footer from '@/components/Footer';
import type { ReactNode } from 'react';

interface PageTemplateProps {
	title: string;
	subtitle?: string;
	description?: string;
	heroImage?: string;
	heroImageAlt?: string;
	heroClassName?: string;
	heroOverlayClassName?: string;
	children: ReactNode;
}

export default function PageTemplate({
	title,
	subtitle,
	description,
	heroImage,
	heroImageAlt,
	heroClassName,
	heroOverlayClassName,
	children,
}: PageTemplateProps) {
	const heroBgClass = heroClassName ?? 'bg-primary';
	const heroOverlayClass = heroOverlayClassName ?? 'bg-primary/40';

	return (
		<div className='bg-background text-foreground font-oldstandard'>
			<Navigation />

			<div
				className={`relative w-full h-[55vh] md:h-[65vh] lg:h-[75vh] flex items-center justify-center overflow-hidden ${heroBgClass}`}
			>
				{heroImage ? (
					<div className='absolute inset-0'>
						<Image
							src={heroImage}
							alt={heroImageAlt ?? title}
							fill
							className='object-cover'
							priority
						/>
					</div>
				) : null}

				<div className={`absolute inset-0 ${heroOverlayClass}`} />

				<div className='relative z-20 flex h-full flex-col items-center justify-center text-center px-6'>
					<div className='max-w-4xl rounded-3xl border border-white/10 bg-black/10 p-8 backdrop-blur-xl'>
						<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-primary-foreground drop-shadow-[0_15px_30px_rgba(0,0,0,0.45)]'>
							{title}
						</h1>
						{subtitle ? (
							<p className='mt-4 text-base md:text-xl opacity-80'>{subtitle}</p>
						) : null}
						{description ? (
							<p className='mt-4 text-sm md:text-base opacity-70'>
								{description}
							</p>
						) : null}
					</div>
				</div>
			</div>

			<main className='w-full max-w-7xl mx-auto px-6 py-20'>{children}</main>

			<Footer />
		</div>
	);
}
