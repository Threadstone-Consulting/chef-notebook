import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Viewport } from "next";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import CartProvider, { CartContext } from "@/context/cartContext";

const font = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
    // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
    themeColor: config.colors.main,
    width: "device-width",
    initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" data-theme={config.colors.theme} className={font.className}>
            {config.domainName && (
                <head>
                    <script
                        defer
                        data-domain={config.domainName}
                        data-api="/plausible/api/event"
                        src="/plausible/js/script.js"
                    ></script>
                </head>
            )}
            <body>
                <CartProvider>
                {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
                    <ClientLayout>
                        {children}
                    </ClientLayout>
                </CartProvider>
            </body>
        </html>
    );
}
