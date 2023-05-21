import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>
          Legion Health | Texas psychiatry covered by insurance - get treatment
          for anxiety today
        </title>
      </head>
      <body className={clsx(inter.variable, 'font-sans')}>{children}</body>
    </html>
  )
}
