import { Metadata } from 'next';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Contacto | next<',
  description: 'Página de contacto de la aplicación Next.js"',
  authors: [
    { name: "Cesar Contreras", url: "http://www.cesarcontreras.com" }
  ]
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}