import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (s: string) =>
	s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function POST(req: Request) {
	try {
		const { name, email, service, message, website } = await req.json();

		// Honeypot: bots fill this hidden field, humans don't
		if (website) return NextResponse.json({ ok: true });

		if (!name || !email || !message) {
			return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
		}

		const { error } = await resend.emails.send({
			// Use onboarding@resend.dev until your domain is verified
			from: 'Website Inquiries <onboarding@resend.dev>',
			to: process.env.CONTACT_TO_EMAIL!,
			replyTo: email,
			subject: `New inquiry from ${name} — ${service}`,
			html: `
				<h2>New project inquiry</h2>
				<p><strong>Name:</strong> ${escapeHtml(name)}</p>
				<p><strong>Email:</strong> ${escapeHtml(email)}</p>
				<p><strong>Service:</strong> ${escapeHtml(service)}</p>
				<p><strong>Message:</strong></p>
				<p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
			`,
		});

		if (error) {
			console.error(error);
			return NextResponse.json({ error: 'Send failed' }, { status: 500 });
		}

		return NextResponse.json({ ok: true });
	} catch (err) {
		console.error(err);
		return NextResponse.json({ error: 'Server error' }, { status: 500 });
	}
}