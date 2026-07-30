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

export default function ServicesPage() {
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

	return (
		<PageTemplate
			title='Services'
			subtitle='Brand strategy and polished content systems for social growth.'
			description='From social media marketing to full-service management, we help brands grow with clarity, consistency, and performance.'
			heroClassName='bg-background'
			heroOverlayClassName='bg-transparent'
		>
			<div className='space-y-20'>
				<section className='grid gap-10 lg:grid-cols-2'>
					<article className='space-y-3'>
						<h2 className='text-2xl font-semibold'>Strategy & Planning</h2>
						<p className='text-base opacity-80 leading-relaxed'>
							We map your audience, messaging, and creative cadence so every
							asset feels intentional and on-brand.
						</p>
					</article>

					<article className='space-y-3'>
						<h2 className='text-2xl font-semibold'>Creative Production</h2>
						<p className='text-base opacity-80 leading-relaxed'>
							From short-form video to visual identity, we build polished
							content that performs across channels.
						</p>
					</article>

					<article className='space-y-3'>
						<h2 className='text-2xl font-semibold'>Community & Growth</h2>
						<p className='text-base opacity-80 leading-relaxed'>
							We help you turn followers into customers with clear messaging,
							thoughtful community, and high-conversion systems.
						</p>
					</article>

					<article className='space-y-3'>
						<h2 className='text-2xl font-semibold'>Brand Systems</h2>
						<p className='text-base opacity-80 leading-relaxed'>
							Scale visually and strategically with brand guidelines, content
							frameworks, and a repeatable creative playbook.
						</p>
					</article>
				</section>

				<section className='space-y-20'>
					<div>
						<h2 className='text-3xl font-semibold mb-8'>Skills & Tools</h2>
						<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
							{skillTools.map((tool) => {
								const IconComponent = tool.icon;
								return (
									<div
										key={tool.name}
										className='rounded-3xl border border-stone-200 bg-white/90 p-6 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow'
									>
										<div className='flex items-center gap-3 mb-3'>
											<div className='p-2.5 rounded-2xl bg-stone-100 flex items-center justify-center'>
												<IconComponent className={`w-6 h-6 ${tool.color}`} />
											</div>
											<h3 className='text-xl font-semibold'>{tool.name}</h3>
										</div>
										<p className='text-sm opacity-80 leading-relaxed'>
											{tool.description}
										</p>
									</div>
								);
							})}
						</div>
					</div>

					<div>
						<h2 className='text-3xl font-semibold mb-8'>Packages</h2>
						<div className='grid gap-6 sm:grid-cols-3'>
							<article className='rounded-3xl border border-stone-200 bg-white/90 p-6 sm:p-8 shadow-sm flex flex-col h-full'>
								<h3 className='text-xl font-semibold mb-3'>
									Social Media Marketing
								</h3>
								<p className='text-base opacity-80 leading-relaxed'>
									Campaign creation, channel optimization, and ads strategy to
									help your brand grow visibility and conversions.
								</p>
							</article>
							<article className='rounded-3xl border border-stone-200 bg-white/90 p-6 sm:p-8 shadow-sm flex flex-col h-full'>
								<h3 className='text-xl font-semibold mb-3'>
									Social Media Management
								</h3>
								<p className='text-base opacity-80 leading-relaxed'>
									Content scheduling, community engagement, and performance
									reporting for consistent, polished social channels.
								</p>
							</article>
							<article className='rounded-3xl border border-stone-200 bg-white/90 p-6 sm:p-8 shadow-sm flex flex-col h-full'>
								<h3 className='text-xl font-semibold mb-3'>
									Additional Services
								</h3>
								<p className='text-base opacity-80 leading-relaxed'>
									Brand workshops, creative consulting, and integrated marketing
									systems tailored to your growth goals.
								</p>
							</article>
						</div>
					</div>
				</section>
			</div>
		</PageTemplate>
	);
}
