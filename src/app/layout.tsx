import type { Metadata } from 'next';
import './globals.css';
import { siteContent } from '@/data/content';
import { Phone } from 'lucide-react'; // Import icon for contact button

export const metadata: Metadata = {
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  keywords: [
    'PayPal Nederland',
    'PayPal klantenservice',
    'PayPal inloggen',
    'PayPal wachtwoord vergeten',
    'PayPal account herstellen',
    'PayPal betaling mislukt',
    'PayPal opwaarderen',
    'PayPal contact',
    'PayPal telefoonnummer',
    'PayPal refund',
  ],
  icons: {
    icon: '/gemini-svg.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: `/${siteContent.metadata.url}`,
  },
  openGraph: {
    title: siteContent.metadata.title,
    description: siteContent.metadata.description,
    url: `https://www.paypal.com/nl/${siteContent.metadata.url}`,
    siteName: 'PayPal Nederland',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.metadata.title,
    description: siteContent.metadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate FAQ Schema for all 27 FAQ items
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: siteContent.faqs.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'PayPal Nederland Klantenservice',
    description: siteContent.metadata.description,
    url: `https://www.paypal.com/nl/${siteContent.metadata.url}`,
    areaServed: 'NL',
    serviceType: 'Online Betalingen & Klantenservice',
  };

  const phoneNumber = "+31-20-225-4839";

  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-100 selection:text-[#003087]">
        {children}

        {/* Horizontal Floating Contact Tab at the Bottom-Right */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href={`tel:${phoneNumber}`}
            className="group flex items-center gap-2.5 bg-[#003087] hover:bg-[#001C64] text-white py-3 px-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20"
            aria-label="Klantenservice Bel"
          >
            <Phone className="w-4 h-4 text-cyan-300 animate-pulse shrink-0" />
            <span className="text-xs font-bold tracking-wider uppercase whitespace-nowrap">
              Bel: {phoneNumber}
            </span>
          </a>
        </div>
      </body>
    </html>
  );
}