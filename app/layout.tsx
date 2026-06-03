import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plusJakartaSans.className + " font-sans bg-background text-foreground antialiased min-h-screen"}>
        {children}
      </body>
    </html>
  );
}
