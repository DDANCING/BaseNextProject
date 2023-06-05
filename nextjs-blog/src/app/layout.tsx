import { ReactNode } from 'react'
import './globals.css'
import { Economica } from 'next/font/google'

const Economicafont = Economica({ subsets: ['latin'], weight: '700' })

export const metadata = {
  title: 'Smartav.ia',
  description: 'Aplicativo de controle de aviarios',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={Economicafont.className}>{children}</body>
    </html>
  )
}
