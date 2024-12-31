import "./styles/index.scss";
import { Geist, Geist_Mono } from "next/font/google";
import ReduxProvider from "./store/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Defi Gamecon",
  description: "Africa's Gaming Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <ReduxProvider>
        {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
