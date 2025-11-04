import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Monad Ecosystem',
  description: 'All projects building on Monad blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
