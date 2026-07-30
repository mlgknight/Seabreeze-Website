import Image from 'next/image';
import Navigation from '@/components/nav/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
	return (
		<main className='w-full font-oldstandard'>
			<Navigation />

			{/* HERO WITH BACKGROUND IMAGE */}
			<div className='relative w-full h-[60vh] md:h-[80vh] lg:h-[800px] flex items-center justify-center overflow-hidden bg-primary'>
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
					<div className='relative aspect-[4/5] w-full overflow-hidden shadow-2xl rounded-sm bg-card z-10 transform transition-transform duration-700 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2'>
						{/* Shifting Inner Border lines */}
						<div className='absolute inset-4 border border-white/25 z-20 pointer-events-none group-hover:inset-6 transition-all duration-700 ease-out' />

						{/* Crystal Clear, Unmodified Portrait */}
						<Image
							src='/test_photos/IMG_1062.jpeg'
							alt='Founder Portrait'
							fill
							className='object-cover' // Kept completely clean to keep image 100% clear from the start
							priority
						/>
					</div>
				</div>
			</section>

			{/* SECONDARY BRAND BANNER */}
			<section
				className='w-full h-[40vh] md:h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center relative'
				style={{ backgroundImage: "url('/your-hero-image.jpg')" }}
			>
				<div className='absolute inset-0 bg-black/40'></div>

				<div className='relative z-10 px-6'>
					<h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
						About Seabreeze Strategies
					</h1>
					<p className='max-w-2xl mx-auto text-lg text-white/90'>
						Helping brands navigate the digital tide with clarity, creativity,
						and strategy.
					</p>
				</div>
			</section>



			{/* VALUES */}
			<section className='max-w-6xl mx-auto py-12 md:py-20 px-6'>
				<h2 className='text-3xl font-semibold text-center mb-12'>Our Values</h2>

				<div className='grid md:grid-cols-3 gap-10'>
					<div>
						<h3 className='text-xl font-semibold mb-2'>Clarity</h3>
						<p className='opacity-80'>
							We simplify the complex so you can move forward confidently.
						</p>
					</div>

					<div>
						<h3 className='text-xl font-semibold mb-2'>Creativity</h3>
						<p className='opacity-80'>
							We bring fresh ideas and thoughtful execution to every project.
						</p>
					</div>

					<div>
						<h3 className='text-xl font-semibold mb-2'>Connection</h3>
						<p className='opacity-80'>
							We help brands build meaningful relationships with their audience.
						</p>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className='w-full bg-primary text-primary-foreground py-12 md:py-20 px-6 text-center'>
				<h2 className='text-3xl font-semibold mb-4'>
					Ready to Grow Your Brand?
				</h2>
				<p className='max-w-xl mx-auto opacity-80 mb-8'>
					Let’s build a digital presence that feels authentic, strategic, and
					uniquely you.
				</p>
				<a
					href='/contact'
					className='px-6 py-3 bg-white text-primary font-semibold rounded-md shadow hover:opacity-90 transition'
				>
					Get in Touch
				</a>
			</section>
			<Footer />
		</main>
	);
}
