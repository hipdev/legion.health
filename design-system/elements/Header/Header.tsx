import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/legion-logo.png'
import { Button } from '@/design-system/index'

const Header = () => {
  return (
    <header className='flex items-center justify-between pt-3'>
      <div className='flex items-center gap-16'>
        <Image src={logo} alt='logo' width='146' height='40' />
        <nav className='flex gap-5 font-medium text-black/70'>
          <Link href='#' className=''>
            Home
          </Link>
          <Link href='#'>Providers</Link>
          <Link href='#'>Contact us</Link>
          <Link href='#'>Contracts</Link>
          <Link href='#'>Blog</Link>
        </nav>
      </div>
      <div className='flex gap-2'>
        <Button>Login</Button>
        <Button>Join us</Button>
        <Button>Call (737) 237-2900</Button>
      </div>
    </header>
  )
}

export default Header
