import { Button, Title } from '@/design-system/index'
import heroImage from '../../public/hero-image.png'
import Image from 'next/image'

export default function HomeProviders() {
  return (
    <section className='relative z-10 flex h-36 justify-center bg-white'>
      <div className='main-wrapper flex w-full items-center justify-around'>
        <Image
          src='/providers/bcbs.jpg'
          width={125}
          height={26}
          alt='BlueCross BlueShield'
        />
        <Image
          src='/providers/uhg.jpg'
          width={125}
          height={26}
          alt='BlueCross BlueShield'
        />
        <Image
          src='/providers/aetna.jpg'
          width={125}
          height={26}
          alt='BlueCross BlueShield'
        />
        <Image
          src='/providers/anthem.jpg'
          width={125}
          height={26}
          alt='BlueCross BlueShield'
        />
        <Image
          src='/providers/cigna.jpg'
          width={125}
          height={26}
          alt='BlueCross BlueShield'
        />
      </div>
    </section>
  )
}
