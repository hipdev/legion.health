import { Footer, Header } from '@/design-system/index'

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
      <Footer />
    </main>
  )
}
