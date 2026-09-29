import type { Metadata } from 'next';
import { Old_Standard_TT } from 'next/font/google';
import './globals.css';

const oldStandard = Old_Standard_TT({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-oldstandard',
});

export const metadata: Metadata = {
	title: 'Seabreeze Strategies',
	description: 'Crafting digital success, one wave at a time.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head />
			<body
				className={`
          ${oldStandard.variable}
          antialiased
          bg-background text-foreground
        `}
			>
				{children}
			</body>
		</html>
	);
}
