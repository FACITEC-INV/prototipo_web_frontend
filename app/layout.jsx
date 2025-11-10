import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/commonComponents/Navbar";
import Footer from "@/commonComponents/Footer";
import Notification from "@/commonComponents/Notification";


import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Monitoreo de calidad del agua",
  description: "Sistema de monitoreo de calidad del agua de ríos. Canindeyú - Paraguay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <Navbar />
        <Notification />
        <div className="antialiased bg-gray-100">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
