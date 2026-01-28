import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Sidebar } from "@/components/layout/Sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Traccar GPS Tracking",
  description: "Sistema moderno de rastreamento GPS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="min-h-screen bg-azure">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="ml-64 flex-1 p-6 pt-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
