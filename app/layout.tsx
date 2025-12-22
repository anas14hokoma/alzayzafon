import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "شركة الزيزفون لاستيراد المواد الغذائية",
  description: "استيراد مواد غذائية بخبرة +21 سنة",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
