import Header from '@/design-system/elements/Header/Header'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <div className='main-wrapper'>
        <Header />
      </div>
      {children}
    </main>
  )
}
