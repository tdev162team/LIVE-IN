import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Head";
import ClientLoaderWrapper from "@/app/components/ClientLoaderWrapper"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Live In",
  description: "Make money fast with TikTok Live games",
  authors: [{ name: "Live In" }],
  keywords: [
    "TikTok",
    "Live games",
    "make money",
    "gaming",
    "Live In",
    "easy money",
    "Live Streaming",
    "TikTok Live",
    "TikTok Games",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://yourdomain.com",
    title: "Live In - TikTok Live Games",
    description: "Get TikTok Live games that help you make money fast.",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Live In TikTok Live Games",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live In - TikTok Live Games",
    description: "Get TikTok Live games that help you make money fast.",
    images: ["https://yourdomain.com/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ClientLoaderWrapper>
          <Header />
          {children}
        </ClientLoaderWrapper>
      </body>
    </html>
  );
}
