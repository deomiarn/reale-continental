import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: {
        default: 'Reale Continental GmbH - Swiss Auto Repair Excellence',
        template: '%s | Reale Continental GmbH',
    },
    description: 'Professional auto body repair, windshield repair and replacement, insurance claim handling in Switzerland. Direct insurance coordination by Luigi Reale.',
    keywords: ['Karosseriereparatur Schweiz', 'Frontscheibenreparatur', 'Versicherungsschäden', 'Auto Reparatur Schweiz'],
    metadataBase: new URL('https://realecontinental.ch'),
};

export default async function RootLayout({ children }: { children: ReactNode }) {
    const locale = await getLocale();

    return (
        <html lang={locale} className={inter.variable} suppressHydrationWarning>
            <body className="font-sans antialiased">
                {children}
            </body>
        </html>
    );
}
