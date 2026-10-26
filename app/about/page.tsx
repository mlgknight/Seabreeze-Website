import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/nav/Navigation';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata = createPageMetadata(
	'About Emma | Social Media Strategist in Wilmington, NC',
	'Meet Emma, founder of Seabreeze Strategies. Learn how her background in creative writing and social media helps small businesses make waves online.',
	'/about',
);

export default function AboutPage() {
	return (
		<main className='w-full font-oldstandard'>
			<Navigation />

			{/* HERO WITH BACKGROUND IMAGE */}
			<div className='relative flex h-[60vh] min-h-[34rem] w-full items-center justify-center overflow-hidden bg-primary md:h-[80vh] md:min-h-0 lg:h-200'>
				{/* Background Beach Image */}
				<Image
					src='/Wrightville_beach.jpg'
					alt='Beach Background'
					fill
					sizes='100vw'
					className='object-cover'
					priority
				/>

				{/* Dark Overlay tint */}
				<div className='absolute inset-0 bg-primary/40 z-10' />

				{/* Content Container */}
				<div className='relative z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center'>
					<h1 className='font-oldstandard text-4xl font-extrabold leading-[1.05] tracking-tight text-primary-foreground drop-shadow-xl sm:text-6xl md:text-7xl lg:text-8xl'>
						<span className='block'>Helping small businesses</span>
						<span className='block'>make waves online</span>
					</h1>
					<p className='mt-5 text-balance font-oldstandard text-base font-light italic tracking-normal text-primary-foreground/80 sm:text-lg md:text-2xl lg:text-3xl'>
						Your story, shared with purpose
					</p>

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
						Hi, I&apos;m Emma!
					</h2>

					<div className='h-0.5 w-20 bg-border mb-10'></div>

					<div className='max-w-2xl mx-auto md:mx-0 space-y-6'>
						<p className='text-base md:text-lg text-muted-foreground leading-relaxed font-light'>
							I&apos;m the creative mind behind{' '}
							<span className='font-medium text-foreground'>
								Seabreeze Strategies
							</span>
							, certified beach girl, and your newest social media bestie!
						</p>

						<p className='text-base md:text-lg text-muted-foreground leading-relaxed font-light'>
							I&apos;m a proud UCF graduate with a degree in English and a
							concentration in Creative Writing (Go Knights!). I grew up between
							Florida and Hawaii before making my way to Wilmington, NC, in
							2018, so it&apos;s safe to say that coastal living is a big part
							of who I am!
						</p>

						<p className='text-base md:text-lg text-muted-foreground leading-relaxed font-light'>
							I&apos;ve always been a creative at heart. From spending hours
							making art as a little girl to serving as an editor for my high
							school yearbook and my college&apos;s literary magazine, I&apos;ve
							always loved finding new ways to tell stories and turn inspiration
							into something tangible.
						</p>

						<p className='text-base md:text-lg text-muted-foreground leading-relaxed font-light'>
							My journey into social media marketing started back in high school
							when I began helping out with social media for a local boutique.
							What started as a fun creative outlet quickly grew into a passion
							that I continued to pursue throughout college. In 2024, I took the
							leap and began working with clients of my own, turning that
							longtime passion into what is now Seabreeze Strategies!
						</p>

						<p className='text-base md:text-lg text-muted-foreground leading-relaxed font-light'>
							Today, I get to combine my love for storytelling, design, and
							digital marketing to help small businesses show up online in a way
							that feels authentic to them. I believe social media should be
							more than just posting pretty pictures—it&apos;s an opportunity to
							build community, share your story, and help your business grow.
						</p>

						<p className='text-base md:text-lg text-muted-foreground leading-relaxed font-light'>
							When I&apos;m not brainstorming content or planning out a social
							media calendar, you can usually find me running the Wrightsville
							Beach loop, discovering local coffee shops, or dreaming up my next
							weekend trip.
						</p>

						<p className='text-base md:text-lg text-muted-foreground leading-relaxed font-light'>
							I&apos;m so glad you&apos;re here, and I can&apos;t wait to help
							your business make waves online!
						</p>
					</div>
				</div>

				{/* Founder Image Container */}
				<div className='lg:col-span-5 relative pt-10 lg:pl-10 group cursor-pointer'>
					<div className='absolute inset-0 border border-muted-foreground/30 rounded-sm translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 ease-out z-0' />

					<div className='relative aspect-4/5 w-full overflow-hidden shadow-2xl rounded-sm bg-card z-10 transform transition-transform duration-700 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2'>
						<div className='absolute inset-4 border border-white/25 z-20 pointer-events-none group-hover:inset-6 transition-all duration-700 ease-out' />

						<Image
							src='/updated_photos/IMG_2737.jpeg'
							alt='Founder Portrait'
							fill
							sizes='(max-width: 1024px) 100vw, 40vw'
							className='object-cover'
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
						sizes='100vw'
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

			{/* MISSION */}
			<section className='mx-auto max-w-6xl px-6 py-14 md:py-20'>
				<div className='mx-auto max-w-4xl border-y border-[#d9c4a9] py-10 text-center md:py-14'>
					<p className='mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#896447]/70'>
						Our mission
					</p>
					<h2 className='mb-6 text-balance text-3xl font-medium leading-tight tracking-tight text-[#896447] md:text-5xl'>
						<span className='block'>Helping small businesses</span>
						<span className='block'>
							make waves <span className='italic'>online and beyond</span>
						</span>
					</h2>
					<p className='text-base leading-relaxed text-[#896447]/80 md:text-lg'>
						At Seabreeze Strategies, my mission is to help small businesses grow
						through creative storytelling, intentional strategy, and authentic
						connection. I believe every business has a story worth sharing, and
						I&apos;m here to help bring that story to life through thoughtful
						social media management, engaging content, and personalized
						marketing that turns meaningful connections into lasting growth.
					</p>
				</div>
			</section>

			{/* VALUES */}
			<section className='mx-auto max-w-6xl px-6 py-14 md:py-20'>
				<div className='mb-12 text-center'>
					<h2 className='text-4xl text-[#896447] md:text-5xl'>Our Pillars</h2>
				</div>

				<div className='grid gap-10 md:grid-cols-3'>
					<div className='border border-[#d9c4a9] bg-[#f8f3ee] p-7'>
						<h3 className='mb-3 text-2xl text-[#896447]'>Authenticity</h3>
						<p className='mb-4 text-base italic text-[#896447]/80'>
							Your story, your voice, your brand.
						</p>
						<p className='text-base leading-relaxed text-[#896447]/80 md:h-56'>
							I believe the best marketing doesn&apos;t try to make a business
							into something it&apos;s not. It&apos;s about highlighting what
							makes each brand special and creating an online presence that
							feels genuine, relatable, and true to its values.
						</p>
						<p className='mt-5 text-sm font-semibold text-[#896447]'>
							In practice:
						</p>
						<ul className='mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#896447]/80'>
							<li>Brand-specific messaging and storytelling.</li>
							<li>
								Content that reflects each business&apos;s personality and
								values.
							</li>
							<li>
								Intentional trend participation without sacrificing brand
								identity.
							</li>
						</ul>
					</div>

					<div className='border border-[#d9c4a9] bg-[#f8f3ee] p-7'>
						<h3 className='mb-3 text-2xl text-[#896447]'>Creativity</h3>
						<p className='mb-4 text-base italic text-[#896447]/80'>
							Fresh ideas with a thoughtful purpose.
						</p>
						<p className='text-base leading-relaxed text-[#896447]/80 md:h-56'>
							Creativity is at the heart of everything I do. From eye-catching
							visuals to compelling captions, I love finding fresh ways to tell
							stories, capture attention, and make each brand stand out online.
						</p>
						<p className='mt-5 text-sm font-semibold text-[#896447]'>
							In practice:
						</p>
						<ul className='mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#896447]/80'>
							<li>Original content creation and engaging copywriting.</li>
							<li>Fresh concepts tailored to each client.</li>
							<li>Creative storytelling that makes brands memorable.</li>
						</ul>
					</div>

					<div className='border border-[#d9c4a9] bg-[#f8f3ee] p-7'>
						<h3 className='mb-3 text-2xl text-[#896447]'>Connection</h3>
						<p className='mb-4 text-base italic text-[#896447]/80'>
							People first, always.
						</p>
						<p className='text-base leading-relaxed text-[#896447]/80 md:h-56'>
							Social media is about more than numbers. It&apos;s about building
							relationships, creating community, and helping businesses connect
							with the people who believe in what they do. I bring that same
							people-first mindset to every client relationship, too.
						</p>
						<p className='mt-5 text-sm font-semibold text-[#896447]'>
							In practice:
						</p>
						<ul className='mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#896447]/80'>
							<li>Personalized, collaborative client service.</li>
							<li>Content that encourages conversation and community.</li>
							<li>
								Marketing that builds trust and nurtures lasting relationships.
							</li>
						</ul>
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
							sizes='(max-width: 768px) 100vw, 50vw'
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
						<div className='my-6 h-px w-16 self-center bg-[#d9c4a9]' />
						<p className='max-w-md text-base leading-relaxed text-[#896447]/80 md:text-lg'>
							Whether you need strategy, content, or a sharper digital presence,
							I&apos;ll help you turn attention into momentum.
						</p>
						<div className='mt-8 flex flex-col items-center gap-4'>
							<Link
								href='/inquire'
								className='inline-flex items-center justify-center bg-[#896447] px-7 py-3 text-xs font-medium uppercase tracking-[0.28em] text-[#f4ece4] transition hover:bg-[#735739]'
							>
								Book Now
							</Link>
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
