import { Inter,Roboto_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import BottomNav from './components/BottomNav'
import Footer from './components/Footer'

const inter = Roboto_Mono(
  { subsets: ['latin'] 
}
  )

export const metadata = {
  title: 'Rajaul Karim',
  description: 'React Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar/>
        <BottomNav/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
