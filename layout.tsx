import '@/app/ui/global.css';
import {noto_sans} from '@/app/ui/fonts';
import TopBar from './ui/top-bar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto_sans.className} antialiased`}>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
