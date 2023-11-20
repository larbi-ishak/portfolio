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
      <body  className="sm:mx-20 sm:my-10 mx-4 my-4 font-mono">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar/>
            <div className='sm:px-6 sm:py-4'>
            {children}
            </div>
            <Footer/>
        </ThemeProvider>
        </body>
        
    </html>
  )
}
