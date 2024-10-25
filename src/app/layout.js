import "app/style.css";
import Header from "components/header";
import Footer from "components/footer";

export const viewport = {
  width: "1024",
};

export const metadata = {
  title: "World Funakoshi Shotokan Karate Association India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
