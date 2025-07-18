import { getGlobalSettings } from '@georgakopoulos-soares-lab/api';
import Footer from './components/footer';
import Header from './components/header';
import './global.css';

export const metadata = {
  title: 'Georgakopoulos-Soares Lab',
  description: 'Official lab website',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalSettings = await getGlobalSettings();

  const { title, tagline, footerText } = globalSettings;

  metadata.title = title || metadata.title;
  metadata.description = tagline || metadata.description;

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header title={title} />
        <main className="flex-1 w-full mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
