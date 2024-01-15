import '../styles/default.scss'

export const metadata = {
  title: 'Tbler Icons',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Tabler Icons</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
