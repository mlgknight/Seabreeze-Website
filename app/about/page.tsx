import Image from 'next/image';
import Navigation from '@/components/nav/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
	return (
		<main className='w-full font-oldstandard'>
			<Navigation />

			{/* HERO WITH BACKGROUND IMAGE */}
			<div className='relative w-full h-[60vh] md:h-[80vh] lg:h-200 flex items-center justify-center overflow-hidden bg-primary'>
				{/* Background Beach Image */}
				<Image
					src='/Wrightville_beach.jpg'
					alt='Beach Background'
					fill
					className='object-cover'
					priority
				/>

				{/* Dark Overlay tint */}
				<div className='absolute inset-0 bg-primary/40 z-10' />

				{/* Content Container */}
				<div className='relative z-20 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto'>
					<h1 className='text-primary-foreground font-oldstandard font-extrabold text-3xl md:text-6xl lg:text-8xl uppercase tracking-tight leading-none drop-shadow-xl'>
						WE SCALE DIGITAL INFLUENCE.
						<span className='block text-primary-foreground/70 font-light font-oldstandard italic text-base md:text-3xl lg:text-5xl tracking-normal normal-case mt-4'>
							With absolute clarity.
						</span>
					</h1>

					<div className='w-20 h-0.5 bg-primary-foreground/30 mt-8' />
				</div>
			</div>

			{/* FOUNDER SECTION */}
			<section className='w-full max-w-7xl mx-auto px-6 py-16 md:py-40 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center'>
				{/* Founder Text */}
				<div className='lg:col-span-7 z-10'>
					<h3 className='text-sm tracking-[0.5em] uppercase text-muted-foreground mb-8'>
						Hey there!
					</h3>

					<h2 className='text-5xl md:text-7xl font-oldstandard leading-[1.1] mb-10 tracking-tighter'>
						I&apos;m Emma <br />
					</h2>

					<div className='h-0.5 w-20 bg-border mb-10'></div>

					<div className='max-w-2xl mx-auto md:mx-0 space-y-6'>
						<p className='text-base md:text-lg text-muted-foreground leading-relaxed font-light'>
							I&apos;m the founder of{' '}
							<span className='font-medium text-foreground'>
								Seabreeze Strategies
							</span>
							, a dedicated digital consulting agency committed to expanding
							your audience and elevating your online presence. With a deep
							background in strategic marketing and corporate design, I&apos;ve
							refined my skills to help businesses navigate the complexities of
							modern digital growth.
						</p>

						<p className='text-base md:text-lg text-muted-foreground leading-relaxed font-light'>
							My journey into founding Seabreeze was fueled by a passion for
							creative execution and a clear desire to empower companies to
							truly thrive. When I&apos;m not crafting high-impact strategies to
							help businesses succeed, you&apos;ll find me in my happy place by
							the water—soaking in the sun, salt air, and coastal energy.
							I&apos;m also a fitness enthusiast, so you might catch me working
							out or playing a fast-paced game of pickleball. And of course,
							nothing beats sharing a laugh and unwinding with good friends.
						</p>
					</div>
				</div>

				{/* Founder Image Container with Coastal Social Style Floating Animation */}
				<div className='lg:col-span-5 relative pt-10 lg:pl-10 group cursor-pointer'>
					{/* The Structural Animated Background Outline Frame */}
					<div className='absolute inset-0 border border-muted-foreground/30 rounded-sm translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 ease-out z-0' />

					{/* Image Wrapper Frame */}
					<div className='relative aspect-4/5 w-full overflow-hidden shadow-2xl rounded-sm bg-card z-10 transform transition-transform duration-700 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2'>
						{/* Shifting Inner Border lines */}
						<div className='absolute inset-4 border border-white/25 z-20 pointer-events-none group-hover:inset-6 transition-all duration-700 ease-out' />

						{/* Crystal Clear, Unmodified Portrait */}
						<Image
							src='/updated_photos/IMG_2737.jpeg'
							alt='Founder Portrait'
							fill
							className='object-cover' // Kept completely clean to keep image 100% clear from the start
							priority
						/>
					</div>
				</div>
			</section>

			{/* ABOUT SEABREEZE STRATEGIES */}
			<section className='relative w-full overflow-hidden bg-[#f3eadf]'>
				<div className='relative h-105 md:h-140'>
					<Image
						src='/updated_photos/IMG_2812.jpeg'
						alt='Seabreeze Strategies coastal backdrop'
						fill
						className='object-cover object-center md:object-[center_44%]'
					/>
					<div className='absolute inset-0 bg-[#896447]/55' />

					<div className='relative z-10 mx-auto flex h-full max-w-6xl items-center px-6 md:px-10'>
						<div className='max-w-2xl text-white mr-10'>
							<p className='mb-4 text-[10px] font-semibold uppercase tracking-[0.38em] text-white/80'>
								About Seabreeze Strategies
							</p>
							<h2 className='text-4xl leading-none md:text-6xl lg:text-7xl'>
								We build brands that feel as good as they look.
							</h2>
						</div>
					</div>
				</div>
			</section>

			{/* VALUES */}
			<section className='mx-auto max-w-6xl px-6 py-14 md:py-20'>
				<div className='mb-12 text-center'>
					<p className='mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#896447]/70'>
						What guides us
					</p>
					<h2 className='text-4xl text-[#896447] md:text-5xl'>
						Built for thoughtful growth.
					</h2>
				</div>

				<div className='grid gap-10 md:grid-cols-3'>
					<div className='border border-[#d9c4a9] bg-[#f8f3ee] p-7'>
						<h3 className='mb-3 text-2xl text-[#896447]'>Clarity</h3>
						<p className='text-base leading-relaxed text-[#896447]/80'>
							We simplify the noise so your message feels focused, confident,
							and easy to trust.
						</p>
					</div>

					<div className='border border-[#d9c4a9] bg-[#f8f3ee] p-7'>
						<h3 className='mb-3 text-2xl text-[#896447]'>Strategy</h3>
						<p className='text-base leading-relaxed text-[#896447]/80'>
							We build plans that connect vision to action and help businesses
							create momentum that lasts.
						</p>
					</div>

					<div className='border border-[#d9c4a9] bg-[#f8f3ee] p-7'>
						<h3 className='mb-3 text-2xl text-[#896447]'>Connection</h3>
						<p className='text-base leading-relaxed text-[#896447]/80'>
							We help brands build meaningful relationships with the people who
							matter most.
						</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className='w-full px-4 py-16 md:px-6 md:py-24'>
				<div className='mx-auto grid max-w-6xl overflow-hidden border border-[#d9c4a9] bg-[#f8f3ee] shadow-[0_30px_80px_rgba(137,100,71,0.08)] md:grid-cols-[1.05fr_0.95fr]'>
					<div className='relative min-h-75 md:min-h-105'>
						<Image
							src='/updated_photos/IMG_2697.jpeg'
							alt='Seabreeze Strategy Session'
							fill
							className='object-cover'
						/>
						<div className='absolute inset-0 bg-linear-to-r from-[#896447]/25 via-transparent to-transparent' />
					</div>

					<div className='flex flex-col justify-center p-8 md:p-12 lg:p-16'>
						<p className='mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#896447]/60'>
							Let&apos;s build your next chapter
						</p>
						<h2 className='text-4xl leading-none text-[#896447] md:text-6xl'>
							Ready to grow your brand?
						</h2>
						<div className='my-6 h-px w-16 bg-[#afccd1]' />
						<p className='max-w-md text-base leading-relaxed text-[#896447]/80 md:text-lg'>
							Whether you need strategy, content, or a sharper digital presence,
							I&apos;ll help you turn attention into momentum.
						</p>
						<div className='mt-8 flex flex-col items-center gap-4'>
							<a
								href='/inquire'
								className='inline-flex items-center justify-center bg-[#896447] px-7 py-3 text-xs font-medium uppercase tracking-[0.28em] text-[#f4ece4] transition hover:bg-[#735739]'
							>
								Book Now
							</a>
							<span className='text-[10px] font-semibold uppercase tracking-[0.32em] text-[#896447]/60'>
								Seabreeze Strategies
							</span>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
