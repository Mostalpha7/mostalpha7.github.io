import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mustapha Abdulmujeeb — Senior Mobile Engineer",
  description:
    "Senior Fullstack Mobile Engineer specializing in Flutter and Node.js. 5+ years building fintech products used by 100K+ users.",
  keywords: [
    "Flutter Developer",
    "Mobile Engineer",
    "Fintech",
    "Node.js",
    "Fullstack Engineer",
    "Dart",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Mustapha Abdulmujeeb" }],
  creator: "Mustapha Abdulmujeeb",
  metadataBase: new URL("https://mostalpha7.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mostalpha7.github.io",
    title: "Mustapha Abdulmujeeb — Senior Fullstack Mobile Engineer",
    description:
      "Flutter & Node.js engineer with 5+ years shipping fintech products to 100K+ users.",
    siteName: "Mustapha Abdulmujeeb",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustapha Abdulmujeeb — Senior Fullstack Mobile Engineer",
    description:
      "Flutter & Node.js engineer with 5+ years shipping fintech products to 100K+ users.",
    creator: "@mostalpha7",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}