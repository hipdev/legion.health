import Image from 'next/image'

import logo from '../../../public/legion-logo.png'
import { Button } from '@/design-system/index'
import HeaderNav from './HeaderNav'
import { HiPhone } from 'react-icons/hi'

export const Header = () => {
  return (
    <header className='flex items-center justify-between py-5'>
      <div className='flex items-center gap-16'>
        <Image src={logo} alt='logo' width='146' height='40' />
        <HeaderNav />
      </div>
      <div className='flex gap-2'>
        <Button intent='secondary'>Login</Button>
        <Button intent='secondary'>Join us</Button>

        <Button className='flex items-center gap-1'>
          <HiPhone /> Call (737) 237-2900
        </Button>
      </div>
    </header>
  )
}
