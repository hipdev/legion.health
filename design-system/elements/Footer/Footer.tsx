import Image from 'next/image'
import Link from 'next/link'
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai'

import logo from '../../../public/legion-logo.png'

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center pb-6 pt-10'>
      <Image src={logo} alt='logo' width='146' height='40' />
      <p className='mt-7 text-primary'>Fueling the future of mental health</p>

      <nav className='mt-5 flex gap-8 text-black/70'>
        <Link href='#' className='hover:text-black/80'>
          Help center
        </Link>
        <Link href='#' className='hover:text-black/80'>
          Privacy policy
        </Link>
        <Link href='#' className='hover:text-black/80'>
          Terms of service
        </Link>
      </nav>
      <div className='main-wrapper mt-10 flex w-full items-center justify-between border-t border-black/10 pt-3 text-sm'>
        <div className='flex gap-3 text-2xl text-black/60'>
          <a
            href='https://www.instagram.com/legion.health/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineInstagram />
          </a>
          <a
            href='https://twitter.com/LegionHealth'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiOutlineTwitter />
          </a>
          <a
            href='https://www.linkedin.com/company/legionhealth/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillLinkedin />
          </a>
        </div>
        <p className='text-black/60'>
          Copyright © {new Date().getFullYear()} Legion Health
        </p>
      </div>
    </footer>
  )
}
