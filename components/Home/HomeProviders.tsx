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
          className='w-auto'
        />
        <Image
          src='/providers/uhg.jpg'
          width={125}
          height={26}
          alt='BlueCross BlueShield'
          className='w-auto'
        />
        <Image
          src='/providers/aetna.jpg'
          width={125}
          height={26}
          alt='BlueCross BlueShield'
          className='w-auto'
        />
        <Image
          src='/providers/anthem.jpg'
          width={125}
          height={26}
          alt='BlueCross BlueShield'
          className='w-auto'
        />
        <Image
          src='/providers/cigna.jpg'
          width={125}
          height={26}
          alt='BlueCross BlueShield'
          className='w-auto'
        />
      </div>
    </section>
  )
}
