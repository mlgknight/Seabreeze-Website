export const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ??
	(process.env.NODE_ENV === 'production'
		? 'https://seabreezestrategiesnc.com'
		: 'http://localhost:3000');
