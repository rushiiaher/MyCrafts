import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI in Daily Life 2025 | The Most Lit AI Conference',
  description: 'Where AI meets IRL - Join 2000+ tech besties at the most iconic AI conference of 2025 in San Francisco',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
