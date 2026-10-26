import type { Metadata } from 'next';
import InquireForm from './InquireForm';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata: Metadata = createPageMetadata(
	'Inquire About Social Media Services',
	'Tell Seabreeze Strategies about your business, goals, and social media needs. Start a conversation about marketing support in Wilmington, NC.',
	'/inquire',
);

export default async function InquirePage({
	searchParams,
}: {
	searchParams: Promise<{ submitted?: string; confirmationSent?: string; error?: string }>;
}) {
	const params = await searchParams;
	return (
		<InquireForm
			initialSubmitted={params.submitted === '1'}
			initialConfirmationSent={params.confirmationSent === '1'}
			initialError={params.error === '1'}
		/>
	);
}
