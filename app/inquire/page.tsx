'use client';

import { useState } from 'react';
import Navigation from '@/components/nav/Navigation';
import Footer from '@/components/Footer';

const initialForm = {
	name: '',
	businessName: '',
	email: '',
	links: '',
	services: [] as string[],
	overview: '',
	goal: '',
	budget: '',
	website: '', // honeypot: real users never fill this in
};

const serviceOptions = [
	'Social media management',
	'Content creation',
	'Brand strategy',
	'Content planning and coaching',
	'Event marketing',
	'Not sure yet',
];

export default function ContactPage() {
	const [status, setStatus] = useState('idle');
	const [confirmationSent, setConfirmationSent] = useState(false);
	const [formData, setFormData] = useState(initialForm);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus('submitting');

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});
			if (!res.ok) throw new Error('Request failed');
			const result: { confirmationSent?: boolean } = await res.json();
			setConfirmationSent(result.confirmationSent === true);
			setStatus('submitted');
		} catch (error) {
			console.error(error);
			setStatus('error');
		}
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleServiceChange = (service: string) => {
		setFormData((prev) => ({
			...prev,
			services: prev.services.includes(service)
				? prev.services.filter((item) => item !== service)
				: [...prev.services, service],
		}));
	};

	return (
		<div className='w-full min-h-screen font-oldstandard bg-background text-foreground flex flex-col justify-between'>
			<Navigation />

			<main className='w-full flex-1 px-6 pt-28 pb-14 md:px-12 md:pt-32 md:pb-20 lg:px-16'>
				<section className='w-full max-w-7xl mx-auto'>
					<div className='w-full p-0 md:p-4 lg:p-6'>
						{status === 'submitted' ? (
							<div className='py-12 text-center space-y-4'>
								<div className='w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-xl font-bold'>
									✓
								</div>
								<h2 className='text-2xl font-oldstandard font-semibold'>
									Inquiry Received
								</h2>
								<p className='text-muted-foreground font-light text-sm max-w-md mx-auto'>
									Thank you for reaching out, {formData.name.split(' ')[0]}.
									We&apos;ve received your project details and will be in touch
									within 24–48 hours.
								</p>
								<p className='text-muted-foreground font-light text-sm max-w-md mx-auto'>
									{confirmationSent
										? 'A confirmation email is on its way to your inbox.'
										: 'Your inquiry was received, but we could not send a confirmation email. We’ll follow up with you soon.'}
								</p>
								<button
									onClick={() => {
										setStatus('idle');
										setConfirmationSent(false);
										setFormData(initialForm);
									}}
									className=' cursor-pointer mt-4 text-xs font-mono uppercase tracking-widest text-muted-foreground underline hover:text-foreground transition-colors'
								>
									Send another message
								</button>
							</div>
						) : (
							<>
								<h2 className='text-4xl md:text-5xl lg:text-6xl font-oldstandard font-semibold mb-3'>
									Your next chapter starts here.
								</h2>
								<p className='text-base md:text-lg text-muted-foreground font-light mb-10 max-w-3xl leading-relaxed'>
									Have a business you love and a story you&apos;re ready to
									share? I&apos;d love to hear about it! Whether you&apos;re
									looking for a little extra help with social media, need fresh
									creative content, or are ready for a more intentional
									marketing strategy, I&apos;m here to help you make your next
									move with confidence. Tell me a little about your business,
									your goals, and where you&apos;d love to go. Fill out the
									inquiry form below, and let&apos;s see how we can make some
									waves together!
								</p>

								<form onSubmit={handleSubmit} className='space-y-8'>
									{/* Honeypot field: hidden from humans, bots tend to fill it */}
									<input
										type='text'
										name='website'
										value={formData.website}
										onChange={handleChange}
										tabIndex={-1}
										autoComplete='off'
										className='hidden'
										aria-hidden='true'
									/>

									<div className='grid gap-8 sm:grid-cols-2'>
										<div>
											<label
												htmlFor='name'
												className='block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1'
											>
												Your Name *
											</label>
											<input
												id='name'
												type='text'
												required
												name='name'
												value={formData.name}
												onChange={handleChange}
												placeholder='Jane Doe'
												className='w-full px-2 py-2 bg-transparent border-b border-border/80 rounded-none text-base md:text-lg focus:outline-none focus:ring-0 focus:border-foreground transition-all placeholder:text-muted-foreground/50'
											/>
										</div>

										<div>
											<label
												htmlFor='businessName'
												className='block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1'
											>
												Business Name
											</label>
											<input
												id='businessName'
												type='text'
												name='businessName'
												value={formData.businessName}
												onChange={handleChange}
												placeholder='Your business'
												className='w-full px-2 py-2 bg-transparent border-b border-border/80 rounded-none text-base md:text-lg focus:outline-none focus:ring-0 focus:border-foreground transition-all placeholder:text-muted-foreground/50'
											/>
										</div>

										<div>
											<label
												htmlFor='email'
												className='block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1'
											>
												Email Address *
											</label>
											<input
												id='email'
												type='email'
												required
												name='email'
												value={formData.email}
												onChange={handleChange}
												placeholder='jane@example.com'
												className='w-full px-2 py-2 bg-transparent border-b border-border/80 rounded-none text-base md:text-lg focus:outline-none focus:ring-0 focus:border-foreground transition-all placeholder:text-muted-foreground/50'
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor='links'
											className='block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1'
										>
											Business website and social media links
										</label>
										<input
											id='links'
											type='text'
											name='links'
											value={formData.links}
											onChange={handleChange}
											placeholder='Website, Instagram, TikTok, etc.'
											className='w-full px-2 py-3 bg-transparent border-b border-border/80 rounded-none text-base md:text-lg focus:outline-none focus:ring-0 focus:border-foreground transition-all placeholder:text-muted-foreground/50'
										/>
									</div>

									<div>
										<fieldset>
											<legend className='block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3'>
												What services are you interested in?
											</legend>
											<div className='grid gap-3 sm:grid-cols-2'>
												{serviceOptions.map((service) => (
													<label
														key={service}
														className='flex items-center gap-3 text-base text-foreground'
													>
														<input
															type='checkbox'
															checked={formData.services.includes(service)}
															onChange={() => handleServiceChange(service)}
															className='h-4 w-4 accent-primary'
														/>
														{service}
													</label>
												))}
											</div>
										</fieldset>
									</div>

									<div>
										<label
											htmlFor='overview'
											className='block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1'
										>
											Tell me about your business and what you&apos;re looking for
										</label>
										<textarea
											id='overview'
											rows={4}
											name='overview'
											value={formData.overview}
											onChange={handleChange}
											placeholder='Share a little about your business, what you offer, and the support you have in mind...'
											className='w-full px-2 py-2 bg-transparent border-b border-border/80 rounded-none text-base md:text-lg focus:outline-none focus:ring-0 focus:border-foreground transition-all resize-y placeholder:text-muted-foreground/50'
										/>
									</div>

									<div>
										<label
											htmlFor='goal'
											className='block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1'
										>
											What&apos;s your biggest social media or marketing goal right now?
										</label>
										<textarea
											id='goal'
											rows={3}
											name='goal'
											value={formData.goal}
											onChange={handleChange}
											placeholder='Tell me what you would love to accomplish...'
											className='w-full px-2 py-2 bg-transparent border-b border-border/80 rounded-none text-base md:text-lg focus:outline-none focus:ring-0 focus:border-foreground transition-all resize-y placeholder:text-muted-foreground/50'
										/>
									</div>

									<div>
										<label
											htmlFor='budget'
											className='block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1'
										>
											What&apos;s your approximate monthly marketing budget?
										</label>
										<input
											id='budget'
											type='text'
											name='budget'
											value={formData.budget}
											onChange={handleChange}
											placeholder='For example, $750 per month or not sure yet'
											className='w-full px-2 py-3 bg-transparent border-b border-border/80 rounded-none text-base md:text-lg focus:outline-none focus:ring-0 focus:border-foreground transition-all placeholder:text-muted-foreground/50'
										/>
									</div>

									{status === 'error' && (
										<p className='text-sm text-red-600 text-center'>
											Something went wrong. Please try again or email us
											directly.
										</p>
									)}

									<button
										type='submit'
										disabled={status === 'submitting'}
										className='cursor-pointer w-full max-w-sm mx-auto py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.2em] rounded-none hover:opacity-95 disabled:opacity-50 transition-all active:scale-[0.99] flex items-center justify-center gap-2'
									>
										{status === 'submitting' ? (
											<span>Sending...</span>
										) : (
											<>
												<span>Send Inquiry</span>
												<span className='text-base leading-none'>→</span>
											</>
										)}
									</button>
								</form>
							</>
						)}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}