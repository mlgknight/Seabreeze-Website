import type { Metadata } from 'next';
import { Old_Standard_TT } from 'next/font/google';
import { siteUrl } from '@/lib/site';
import './globals.css';

const oldStandard = Old_Standard_TT({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-oldstandard',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: '/',
    },
    title: {
        default: 'Seabreeze Strategies',
        template: '%s | Seabreeze Strategies',
    },
    description: 'Helping small businesses make waves online through creative storytelling, intentional strategy, and authentic connection.',
    icons: {
        icon: '/Seabreeze_Strategies_Logo/no_background2.png', // Uses logo for browser tab
        shortcut: '/Seabreeze_Strategies_Logo/no_background2.png',
        apple: '/Seabreeze_Strategies_Logo/no_background2.png',
    },
    openGraph: {
        title: 'Seabreeze Strategies',
        description: 'Helping small businesses make waves online through creative storytelling, intentional strategy, and authentic connection.',
        url: siteUrl,
        siteName: 'Seabreeze Strategies',
        images: [
            {
                // Update file extension (.png / .jpg) to match your exact file name inside public/Seabreeze_Strategies_Logo/
                url: '/Seabreeze_Strategies_Logo/opengraph-image.png',
                width: 500,
                height: 500,
                alt: 'Seabreeze Strategies Logo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Seabreeze Strategies',
        description: 'Helping small businesses make waves online through creative storytelling, intentional strategy, and authentic connection.',
        images: ['/Seabreeze_Strategies_Logo/opengraph-image.png'],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className={oldStandard.variable}>
            <body className='antialiased bg-background text-foreground'>
                {children}
            </body>
        </html>
    );
}