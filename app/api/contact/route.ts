import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	const isNativeForm = !req.headers
		.get('content-type')
		?.includes('application/json');
	const redirectToInquiry = (query: string) =>
		new NextResponse(null, {
			status: 303,
			headers: { Location: `/inquire?${query}` },
		});

	try {
		const payload = isNativeForm
			? await req.formData().then((formData) => ({
					name: formData.get('name'),
					email: formData.get('email'),
					businessName: formData.get('businessName'),
					links: formData.get('links'),
					services: formData.getAll('services'),
					overview: formData.get('overview'),
					goal: formData.get('goal'),
					budget: formData.get('budget'),
					website: formData.get('website'),
				}))
			: await req.json();

		const {
			name,
			email,
			businessName,
			links,
			services,
			overview,
			goal,
			budget,
			website,
		} = payload;

		// Honeypot: bots fill this hidden field, humans don't
		if (website) {
			return isNativeForm
				? redirectToInquiry('submitted=1')
				: NextResponse.json({ ok: true });
		}

		if (
			typeof name !== 'string' ||
			!name.trim() ||
			typeof email !== 'string' ||
			!email.trim() ||
			(services !== undefined &&
				(!Array.isArray(services) ||
					!services.every((service: unknown) => typeof service === 'string')))
		) {
			return isNativeForm
				? redirectToInquiry('error=1')
				: NextResponse.json({ error: 'Missing fields' }, { status: 400 });
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return isNativeForm
				? redirectToInquiry('error=1')
				: NextResponse.json({ error: 'Invalid email' }, { status: 400 });
		}

		const templateId = process.env.RESEND_CONTACT_TEMPLATE_ID;
		if (!templateId) {
			console.error('RESEND_CONTACT_TEMPLATE_ID is not configured');
			return NextResponse.json(
				{ error: 'Email template is not configured' },
				{ status: 500 },
			);
		}

		const serviceList = Array.isArray(services)
			? services.join(', ')
			: 'Not specified';

		const { error } = await resend.emails.send({
			// Use onboarding@resend.dev until your domain is verified
			from: 'Website Inquiries <inquiries@seabreezestrategiesnc.com>',
			to: process.env.CONTACT_TO_EMAIL!,
			subject: `New inquiry from ${name.trim()}`,
			replyTo: email,
			template: {
				id: templateId,
				variables: {
					name,
					email,
					businessName: businessName || 'Not provided',
					links: links || 'Not provided',
					services: serviceList,
					overview: overview || 'Not provided',
					goal: goal || 'Not provided',
					budget: budget || 'Not provided',
				},
			},
		});

		if (error) {
			console.error(error);
			return NextResponse.json({ error: 'Send failed' }, { status: 500 });
		}

		let confirmationSent = false;
		try {
			const { error: confirmationError } = await resend.emails.send({
				from:
					process.env.RESEND_FROM_EMAIL ||
					'Website Inquiries <inquiries@seabreezestrategiesnc.com>',
				to: email,
				replyTo: process.env.CONTACT_TO_EMAIL,
				template: {
					id: 'inquiry-acknowledgment',
					variables: {
						firstName: name.trim().split(/\s+/)[0],
					},
				},
			});

			if (confirmationError) {
				console.error('Failed to send client inquiry confirmation:', confirmationError);
			} else {
				confirmationSent = true;
			}
		} catch (confirmationError) {
			console.error('Failed to send client inquiry confirmation:', confirmationError);
		}

		return isNativeForm
			? redirectToInquiry(
					`submitted=1&confirmationSent=${confirmationSent ? '1' : '0'}`,
				)
			: NextResponse.json({ ok: true, confirmationSent });
	} catch (err) {
		console.error(err);
		return isNativeForm
			? redirectToInquiry('error=1')
			: NextResponse.json({ error: 'Server error' }, { status: 500 });
	}
}