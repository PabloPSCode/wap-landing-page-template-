import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
//@ts-ignore
import "../styles/globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wap | Logística inteligente",
  description:
    "Transportadora Wap com cobertura nacional, rastreamento em tempo real e equipe dedicada para operações críticas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${raleway.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
