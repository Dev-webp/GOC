import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure this is minified in production
import { ThemeProvider } from "./provider";
import { Analytics } from "@vercel/analytics/react"; // Import the Analytics component
import { SpeedInsights } from "@vercel/speed-insights/next"; // Import the SpeedInsights component

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Germany Opportunity Card Eligibility Job Seeker Best Visa Immigration Consultants in Hyderabad Bangalore",
  description: "Germany Opportunity Card is the best way to settle in Germany and Check Germany Opportunity Card Eligibility also apply  online with Best Visa Immigration Consultants in Hyderabad and Bangalore also get to know the huge benefits of Germany Opportunity Card",
  keywords: "Germany, Opportunity Card, visa, immigration, work, travel",
  creator: "VJC Overseas",
  publisher: "VJC Overseas",
};

export const viewport = {
  themeColor: "#000000", // Set a theme color for mobile browsers
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        {/* Add other meta tags if needed */}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          // Remove disableTransitionOnChange if not needed
        >
          {children}
          <Analytics /> {/* Include the Analytics component here */}
          <SpeedInsights /> {/* Include the SpeedInsights component here */}
        </ThemeProvider>
      </body>
    </html>
  );
}
