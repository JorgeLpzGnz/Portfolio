// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
    title: "Jorge López - Web3 & Front-end Developer",
    description: "Portfolio de Jorge López - Desarrollador especializado en Web3, React, y tecnologías blockchain con 3 años de experiencia en dApps y smart contracts",
    keywords: ["Web3", "React", "Solidity", "Front-end Developer", "Blockchain", "dApps", "Smart Contracts", "Next.js", "TypeScript"],
    authors: [{ name: "Jorge López" }],
    creator: "Jorge López",
    openGraph: {
        title: "Jorge López - Web3 & Front-end Developer",
        description: "Portfolio profesional de desarrollo Web3 y Front-end",
        type: "website",
        locale: "es_ES",
        alternateLocale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Jorge López - Web3 Developer",
        description: "Portfolio profesional de desarrollo Web3 y Front-end",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => 
    <html lang="es">
        <body className="antialiased">
            <ClientLayout>{children}</ClientLayout>
        </body>
    </html>

export default RootLayout