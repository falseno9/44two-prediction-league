import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Premier League Prediction League',
  description: 'Make predictions for Premier League matches and compete with friends!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}