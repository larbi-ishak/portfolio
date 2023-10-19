import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: 'LARBI ISHAK',
  description: 'LARBI ISHAK , Software engineer personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className="mx-20 my-10 font-mono">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar/>
            <div className='px-6 py-4'>
            {children}
            </div>
            <Footer/>
        </ThemeProvider>
        </body>
        
    </html>
  )
}
