'use client';

import { useState } from 'react';
import Navigation from '@/components/nav/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
	const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'submitted'
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		service: 'Brand Strategy & Launch',
		message: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus('submitting');

		// Simulate API request (e.g., via Resend / SendGrid / Next API route)
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setStatus('submitted');
		} catch (error) {
			console.error(error);
			setStatus('idle');
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className='w-full min-h-screen font-oldstandard bg-background text-foreground flex flex-col justify-between'>
			<Navigation />

			{/* Semantic main container for screen readers & SEO */}
			<main className='w-full max-w-6xl mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-24 grow'>
				<section className='grid gap-10 lg:grid-cols-12 items-start'>
					{/* Left Column: Direct Info */}
					<div className='lg:col-span-5'>
						<div className='rounded-3xl border border-border/80 bg-card p-8 md:p-10 shadow-sm'>
							<span className='text-xs font-mono tracking-[0.25em] uppercase text-muted-foreground block mb-2'>
								Get In Touch
							</span>
							<h1 className='text-3xl md:text-4xl font-oldstandard font-semibold mb-6 text-foreground'>
								Start a Conversation
							</h1>

							<div className='space-y-6 text-sm text-muted-foreground leading-relaxed font-light'>
								<div>
									<p className='font-medium text-foreground mb-1'>Email Us</p>
									<a
										href='mailto:hello@seabreezestrategies.com'
										className='hover:text-foreground underline decoration-border underline-offset-4 transition-colors'
									>
										hello@seabreezestrategies.com
									</a>
								</div>

								<div>
									<p className='font-medium text-foreground mb-1'>Call Us</p>
									<a
										href='tel:+13213399807'
										className='hover:text-foreground underline decoration-border underline-offset-4 transition-colors'
									>
										(321) 339-9807
									</a>
								</div>

								<hr className='border-border/60 my-6' />

								<div>
									<p className='font-medium text-foreground mb-2'>
										Who We Partner With
									</p>
									<p>
										Boutique brands, service-based businesses, and vision-driven
										founders seeking a refined, strategic digital presence.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Contact Form */}
					<div className='lg:col-span-7 rounded-3xl border border-border/80 bg-card p-8 md:p-10 shadow-sm'>
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
										setFormData({
											name: '',
											email: '',
											service: 'Brand Strategy & Launch',
											message: '',
										});
									}}
									className='mt-4 text-xs font-mono uppercase tracking-widest text-muted-foreground underline hover:text-foreground transition-colors'
								>
									Send another message
								</button>
							</div>
						) : (
							<>
								<h2 className='text-2xl font-oldstandard font-semibold mb-2'>
									Project Details
								</h2>
								<p className='text-sm text-muted-foreground font-light mb-8'>
									Fill out the form below and we’ll reach out with recommended
									next steps.
								</p>

								<form onSubmit={handleSubmit} className='space-y-6'>
									<div className='grid gap-6 sm:grid-cols-2'>
										<div>
											<label
												htmlFor='name'
												className='block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2'
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
												className='w-full px-4 py-3 bg-background border border-border/80 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-all placeholder:text-muted-foreground/50'
											/>
										</div>

										<div>
											<label
												htmlFor='email'
												className='block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2'
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
												className='w-full px-4 py-3 bg-background border border-border/80 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-all placeholder:text-muted-foreground/50'
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor='service'
											className='block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2'
										>
											What do you need help with?
										</label>
										<div className='relative'>
											<select
												id='service'
												name='service'
												value={formData.service}
												onChange={handleChange}
												className='w-full px-4 py-3 bg-background border border-border/80 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-all appearance-none cursor-pointer pr-10'
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
											className='block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2'
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
											className='w-full px-4 py-3 bg-background border border-border/80 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-all resize-none placeholder:text-muted-foreground/50'
										/>
									</div>

									<button
										type='submit'
										disabled={status === 'submitting'}
										className='w-full py-4 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.2em] rounded-xl hover:opacity-95 disabled:opacity-50 transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2'
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
