import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ledger Leadership',
  description: 'Ledger Leadership website and LLOps Control Center',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
