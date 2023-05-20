import '@/styles/globals.css'

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
      <body className='bg-slate-800'>{children}</body>
    </html>
  )
}
