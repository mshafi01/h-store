import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Hashfi - Premium Lifestyle Clothing & Home Decor",
  description:
    "Discover Hashfi's curated collection of premium lifestyle clothing and elegant home decor. Elevate your style with our sophisticated designs for modern living.",
  keywords: [
    "lifestyle clothing",
    "home decor",
    "premium fashion",
    "modern home accessories",
    "sophisticated style",
    "contemporary design",
    "quality clothing",
    "home furnishings",
    "lifestyle brand",
    "fashion accessories",
    "home styling",
    "premium textiles",
    "modern lifestyle",
    "designer clothing",
    "home decoration",
  ],
  authors: [{ name: "Hashfi" }],
  creator: "Hashfi",
  publisher: "Hashfi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hashfi.shop"),
  alternates: {
    canonical: "/",
  },
  // Facebook specific meta tags
  other: {
    // "fb:app_id": "your-facebook-app-id", // Replace with your actual Facebook App ID
    "fb:pages": "your-facebook-page-id", // Replace with your actual Facebook Page ID
  },
  openGraph: {
    title: "Hashfi - Premium Lifestyle Clothing & Home Decor",
    description:
      "Discover Hashfi's curated collection of premium lifestyle clothing and elegant home decor. Elevate your style with our sophisticated designs for modern living.",
    url: "https://hashfi.shop",
    siteName: "Hashfi",
    images: [
      {
        url: "/hashfi-og.svg",
        width: 1200,
        height: 630,
        alt: "Hashfi - Premium Lifestyle Brand",
        type: "image/svg+xml",
      },
      {
        url: "/hashfi-og.svg",
        width: 600,
        height: 315,
        alt: "Hashfi - Premium Lifestyle Brand",
        type: "image/svg+xml",
      },
    ],
    locale: "en_US",
    type: "website",
    // Add your Facebook App ID if you have one
    // appId: "your-facebook-app-id",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashfi - Premium Lifestyle Clothing & Home Decor",
    description:
      "Discover Hashfi's curated collection of premium lifestyle clothing and elegant home decor. Elevate your style with our sophisticated designs for modern living.",
    images: ["/hashfi-og.svg"],
    creator: "@hashfi",
    site: "@hashfi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: `google-site-verification=${process.env.GOOGLE_VERIFICATION}`,
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
