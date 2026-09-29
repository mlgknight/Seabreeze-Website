import {
	SiShopify,
	SiFacebook,
	SiCanvas,
	SiMeta,
	SiGraphiteEditor,
	SiTiktok,
	SiInstagram,
	SiHootsuite,
} from 'react-icons/si';
import PageTemplate from '@/components/PageTemplate';
import Image from 'next/image';

type ServiceCard = {
	title: string;
	image: string;
	subtitle: string;
	points: string[];
};

export default function ServicesPage() {
	const servicesData: ServiceCard[] = [
		{
			title: 'Brand Kits',
			image: '/services_photos/houses.jpg',
			subtitle: 'For brands looking for a cohesive digital presence:',
			points: [
				'Aesthetic mood board creation',
				'Selection of brand-aligned color palette, motifs, and fonts',
				'Establish brand tone & voice',
				'One of a kind brand kit for digital marketing',
			],
		},
		{
			title: 'Content Compass',
			image: '/services_photos/compass.jpg',
			subtitle: 'For the DIY-ers that need an accountability partner:',
			points: [
				'Marketing strategy & analytics monitoring',
				'Custom monthly content calendar',
				'Run-down of current trends',
				'Ongoing support',
			],
		},
		{
			title: 'On-Site Content Creation',
			image: '/services_photos/phone.avif',
			subtitle: 'For busy business-owners who don’t have time to grab content:',
			points: [
				'Capture photos',
				'Film videos',
				'Behind the scenes footage',
				'Editing',
			],
		},
		{
			title: 'Event Advertising',
			image: '/services_photos/service.jpg',
			subtitle: 'For businesses looking to advertise large events:',
			points: [
				'Live event coverage (including photo & video)',
				'Targeted ad campaigns',
				'Event page creation & marketing',
			],
		},
	];

	const packagesData: ServiceCard[] = [
		{
			title: 'The Shoreline',
			image: '/packages/shoreline.jpeg',
			subtitle: 'For brands looking to establish a presence on social media:',
			points: [
				'3 posts/week on up to 2 platforms (mix of static, carousels, reels)',
				'Copywriting',
				'Monthly content calendars',
				'Marketing strategy & analytics monitoring',
				'Ongoing support',
			],
		},
		{
			title: 'The Offshore',
			image: '/packages/offshore.avif',
			subtitle: 'For brands looking to grow their presence on social media:',
			points: [
				'5 posts/week on up to 2 platforms (mix of static, carousels, reels)',
				'Copywriting',
				'Monthly content calendars',
				'Marketing strategy & analytics monitoring',
				'Ongoing support',
			],
		},
	];

	const skillTools = [
		{
			name: 'Shopify',
			description:
				'E-commerce store setups, product management, and conversion-focused customer experiences.',
			icon: SiShopify,
			color: 'text-[#96BF48]',
		},
		{
			name: 'Instagram',
			description:
				'Content strategies, Reels production, visual branding, and community engagement.',
			icon: SiInstagram,
			color: 'text-[#E4405F]',
		},
		{
			name: 'TikTok',
			description:
				'Short-form video execution, viral trends adaptation, and organic audience growth.',
			icon: SiTiktok,
			color: 'text-[#000000]',
		},
		{
			name: 'Facebook',
			description:
				'Page management, targeted ad campaigns, and community building across segments.',
			icon: SiFacebook,
			color: 'text-[#1877F2]',
		},
		{
			name: 'Meta Business Suite',
			description:
				'Centralized ad campaign scheduling, cross-platform analytics, and inbox management.',
			icon: SiMeta,
			color: 'text-[#0467DF]',
		},
		{
			name: 'CapCut',
			description:
				'High-converting short-form video editing, dynamic captioning, and modern visual effects.',
			icon: SiGraphiteEditor,
			color: 'text-[#000000]',
		},
		{
			name: 'Canva',
			description:
				'Rapid graphic template creation, brand kit development, and on-brand social assets.',
			icon: SiCanvas,
			color: 'text-[#00C4CC]',
		},
		{
			name: 'Hootsuite',
			description:
				'Omnichannel scheduling, content calendar automation, and social listening reports.',
			icon: SiHootsuite,
			color: 'text-[#000000]',
		},
	];

	const renderInfoCard = (card: ServiceCard) => (
		<div
			key={card.title}
			className='w-full overflow-hidden rounded-md border border-stone-300/60 bg-[#cabfae] shadow-sm'
		>
			<div className='relative aspect-16/10 w-full'>
				<Image
					src={card.image}
					alt={card.title}
					fill
					sizes='(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
					className='object-cover'
				/>
			</div>
			<div className='p-4 text-[#f4efe6] sm:p-6'>
				<p className='text-xs leading-snug sm:text-base'>{card.subtitle}</p>
				<h3 className='mb-2 mt-1.5 font-serif text-xl italic sm:mb-2.5 sm:mt-2 sm:text-3xl'>
					{card.title}
				</h3>
				<ul className='space-y-1.5'>
					{card.points.map((point: string) => (
						<li key={point} className='flex gap-2 text-sm leading-snug sm:text-md'>
							<span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f4efe6]' />
							<span className='wrap-break-word'>{point}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);

	return (
		<PageTemplate title='Services' hideHero>
			<div className='space-y-14 sm:space-y-20'>
				<section>
					<h2 className='mb-6 text-center font-serif text-3xl sm:mb-8 sm:text-5xl'>
						Our Services
					</h2>
					<div className='grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4'>
						{servicesData.map(renderInfoCard)}
					</div>
				</section>

				<section className='w-full border-b border-border/80 bg-transparent px-2 py-10'>
					<h2 className='mb-6 text-center font-serif text-3xl sm:mb-8 sm:text-5xl'>
						Our Packages
					</h2>
					<div className='mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:gap-5'>
						{packagesData.map(renderInfoCard)}
					</div>
				</section>

				<section>
					<h2 className='mb-8 text-3xl font-semibold'>Skills & Tools</h2>
					<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
						{skillTools.map((tool) => {
							const IconComponent = tool.icon;
							return (
								<div
									key={tool.name}
									className='group flex h-full transform cursor-pointer flex-col rounded-xl border border-stone-200 bg-white/90 p-7 shadow-sm transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-105 hover:border-primary/40 hover:bg-white hover:shadow-lg'
								>
									<div className='mb-4 flex items-center gap-4'>
										<div className='flex items-center justify-center rounded-xl bg-stone-100 p-3 transition-all duration-200 group-hover:scale-110 group-hover:bg-primary/10'>
											<IconComponent className={`h-7 w-7 ${tool.color}`} />
										</div>
										<h3 className='text-xl font-bold'>{tool.name}</h3>
									</div>
									<p className='text-lg leading-relaxed opacity-80'>
										{tool.description}
									</p>
								</div>
							);
						})}
					</div>
				</section>
			</div>
		</PageTemplate>
	);
}