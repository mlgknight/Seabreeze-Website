import type { Metadata } from 'next';
import { siteUrl } from '@/lib/site';

export function createPageMetadata(
	title: string,
	description: string,
	path: string,
): Metadata {
	const fullTitle = `${title} | Seabreeze Strategies`;
	const url = new URL(path, siteUrl).toString();
	const image = {
		url: '/Seabreeze_Strategies_Logo/opengraph-image.png',
		width: 500,
		height: 500,
		alt: 'Seabreeze Strategies',
	};

	return {
		title,
		description,
		alternates: { canonical: path },
		openGraph: {
			title: fullTitle,
			description,
			url,
			siteName: 'Seabreeze Strategies',
			images: [image],
			locale: 'en_US',
			type: 'website',
		},
		twitter: {
			card: 'summary_large_image',
			title: fullTitle,
			description,
			images: [image.url],
		},
	};
}
