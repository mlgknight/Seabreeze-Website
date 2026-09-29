'use client';

import { useState } from 'react';
import Navigation from '@/components/nav/Navigation';
import Footer from '@/components/Footer';

const initialForm = {
	name: '',
	email: '',
	service: 'Brand Strategy & Launch',
	message: '',
	website: '', // honeypot: real users never fill this in
};

export default function ContactPage() {
	const [status, setStatus] = useState('idle');
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
								<button
									onClick={() => {
										setStatus('idle');
										setFormData(initialForm);
									}}
									className='mt-4 text-xs font-mono uppercase tracking-widest text-muted-foreground underline hover:text-foreground transition-colors'
								>
									Send another message
								</button>
							</div>
						) : (
							<>
								<h2 className='text-4xl md:text-5xl lg:text-6xl font-oldstandard font-semibold mb-3'>
									Project Details
								</h2>
								<p className='text-base md:text-lg text-muted-foreground font-light mb-10 max-w-2xl'>
									Fill out the form below and we’ll reach out with recommended
									next steps.
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
											htmlFor='service'
											className='block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1'
										>
											What do you need help with?
										</label>
										<div className='relative'>
											<select
												id='service'
												name='service'
												value={formData.service}
												onChange={handleChange}
												className='w-full px-4 py-4 bg-transparent border-b border-border/80 rounded-none text-base md:text-lg focus:outline-none focus:ring-0 focus:border-foreground transition-all appearance-none cursor-pointer pr-12'
											>
												<option value='Brand Strategy & Launch'>
													Brand Strategy & Launch
												</option>
												<option value='Content Production & Campaigns'>
													Content Production & Campaigns
												</option>
												<option value='Social Media & Audience Growth'>
													Social Media & Audience Growth
												</option>
												<option value='Other / Full Consultation'>
													Other / Full Consultation
												</option>
											</select>
											<div className='pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-xs'>
												▼
											</div>
										</div>
									</div>

									<div>
										<label
											htmlFor='message'
											className='block text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-1'
										>
											Project Overview & Goals *
										</label>
										<textarea
											id='message'
											required
											rows={5}
											name='message'
											value={formData.message}
											onChange={handleChange}
											placeholder='Tell us about your timeline, current goals, and where you need support...'
											className='w-full px-2 py-2 bg-transparent border-b border-border/80 rounded-none text-base md:text-lg focus:outline-none focus:ring-0 focus:border-foreground transition-all resize-none placeholder:text-muted-foreground/50'
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