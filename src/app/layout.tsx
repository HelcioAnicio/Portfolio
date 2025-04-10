import type { Metadata } from "next";
import { Geist_Mono, Limelight, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const limelight = Limelight({
  variable: "--font-limelight",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const fonts = {
  libreFranklin: libreFranklin.variable,
  limelight: limelight.variable,
  geistMono: geistMono.variable,
};

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${limelight.variable} ${geistMono.variable} ${libreFranklin.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>{" "}
      </body>
    </html>
  );
}
