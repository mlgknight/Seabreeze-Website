import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';
import { siteUrl } from '@/lib/site';
import { createPageMetadata } from '@/lib/page-metadata';

export const metadata: Metadata = createPageMetadata(
	'Social Media Marketing in Wilmington, NC',
	'Seabreeze Strategies helps Wilmington, NC small businesses grow with social media management, content creation, and authentic marketing strategy.',
	'/',
);

const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'ProfessionalService',
	name: 'Seabreeze Strategies',
	url: siteUrl,
	description:
		'Social media management, content creation, and marketing strategy for small businesses.',
	areaServed: {
		'@type': 'City',
		name: 'Wilmington, NC',
	},
	serviceType: [
		'Social media management',
		'Content creation',
		'Brand strategy',
		'Event marketing',
	],
	sameAs: ['https://instagram.com/seabreezestrategies'],
};

export default function HomePage() {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
				}}
			/>
			<HomePageClient />
		</>
	);
}
