import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anas Irfan | Frontend Developer",
  description: "Portfolio of Anas Irfan - Frontend Developer specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
