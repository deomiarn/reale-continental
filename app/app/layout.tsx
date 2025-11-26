import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
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
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="de" className={inter.variable}>
            <body className="font-sans antialiased">
                {children}
            </body>
        </html>
    );
}
