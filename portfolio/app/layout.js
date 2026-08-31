import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fabio Lopez · UEFA Pro Coach",
  description: "Professional football coach portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${inter.className} p-4 md:p-8`}
        suppressHydrationWarning
      >
        <main className="max-w-6xl mx-auto bg-[#141210] rounded-3xl p-6 md:p-10 border border-[#2a2622] shadow-2xl">
          {children}
        </main>
      </body>
    </html>
  );
}
