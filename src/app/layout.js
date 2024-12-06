import "app/style.css";
import Header from "components/header";
import Footer from "components/footer";

export const viewport = {
  width: "1024",
};

export const metadata = {
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  verification: {
    google: "THlPaMBa13sxZA9t1gvP7YFTChtTSErUum4qkweW_3s",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXMFLFSHVK"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XXMFLFSHVK');
        `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
