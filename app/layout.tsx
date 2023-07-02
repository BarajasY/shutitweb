import '../styles/globals.css';
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], weight: ["900"] })

export const metadata = {
  title: 'ShutIt',
  description: 'ShutIt desktop app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
