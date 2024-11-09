import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Provider from "./Provider";

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
        <ClerkProvider
            appearance={{
                baseTheme: dark,
                variables: {
                    colorPrimary: "#3371FF",
                    fontSize: "16px",
                },
                layout: {
                    unsafe_disableDevelopmentModeWarnings: true,
                },
            }}
        >
            <html lang="en">
                <body className={`${poppins.variable} antialiased`}>
                    <Provider>
                        {children}
                    </Provider>
                </body>
            </html>
        </ClerkProvider>
    );
}
