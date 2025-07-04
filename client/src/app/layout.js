// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/components/ClientProvider";
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProvider>
          <div className="flex flex-col min-h-screen bg-amber-100">
            <header className="h-auto bg-gray-800 text-white flex items-center">
              <Navbar />
            </header>

            <div className="flex flex-1 overflow-hidden max-h-[calc(100vh_-_calc(var(--spacing)_*_16))]">
              <Sidebar />
              <main className="flex-1 p-4 overflow-auto">{children}</main>
            </div>
          </div>
        </ClientProvider>
      </body>
    </html>
  );
}
