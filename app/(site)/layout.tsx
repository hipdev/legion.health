import { Button } from '@/design-system/index'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Button type='button'>This is a button</Button>
      {children}
    </main>
  )
}
