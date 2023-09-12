import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './components/header'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { BackToTop } from './components/back-top'
import { Toaster } from './components/toster'

export const metadata = {
  // quando precisa colocar um dado dinaminco + um padrao = precisa usar o template
  title : {
    default : "Home",
    template: "%s | Pedrinvits "
  },
  icons: [
    {
      url : "/icon.png"
    }
  ]
}
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster/>
        <BackToTop/>
        <Header/>
        {children}
        <ContactForm/>
        <Footer/>
      </body>
    </html>
  )
}
