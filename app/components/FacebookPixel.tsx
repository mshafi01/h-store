"use client";

import Script from "next/script";

interface FacebookPixelProps {
  pixelId: string;
}

export default function FacebookPixel({ pixelId }: FacebookPixelProps) {
  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        src="https://connect.facebook.net/en_US/fbevents.js"
        onLoad={() => {
          // @ts-ignore - Facebook Pixel global function
          if (typeof window !== "undefined" && window.fbq) {
            // @ts-ignore
            window.fbq("init", pixelId);
            // @ts-ignore
            window.fbq("track", "PageView");
          }
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
