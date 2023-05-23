import Image from 'next/image'

export default function HomeProviders() {
  return (
    <section className='relative z-10 flex justify-center bg-white pt-3 md:h-36 md:pt-0'>
      <div className='main-wrapper flex w-full flex-wrap items-center justify-around'>
        <Image
          src='/providers/bcbs.jpg'
          width={125}
          height={26}
          alt='BlueCross BlueShield'
          className='w-24 md:w-auto'
        />
        <Image
          src='/providers/uhg.jpg'
          width={125}
          height={26}
          alt='United healthcare logo'
          className='w-24 md:w-auto'
        />
        <Image
          src='/providers/aetna.jpg'
          width={125}
          height={26}
          alt='Aetna logo'
          className='w-24 md:w-auto'
        />
        <Image
          src='/providers/anthem.jpg'
          width={125}
          height={26}
          alt='Anthem logo'
          className='w-24 md:w-auto'
        />
        <Image
          src='/providers/cigna.jpg'
          width={125}
          height={26}
          alt='Cigna logo'
          className='w-24 md:w-auto'
        />
      </div>
    </section>
  )
}
