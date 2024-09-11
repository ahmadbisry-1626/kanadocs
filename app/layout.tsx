import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--poppins"
}
);

export const metadata: Metadata = {
    title: "K-Docs | Kanabagi Documentations",
    description: "Kanabagi Documentations",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
