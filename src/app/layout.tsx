import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brasileiros para o Brasil",
  description: "1ª Expedição Brasileiros para o Brasil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}