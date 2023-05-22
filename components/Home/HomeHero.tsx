import { Button, Title } from '@/design-system/index'
import heroImage from '../../public/hero-image.png'
import Image from 'next/image'

export default function HomeHero() {
  return (
    <section
      style={{ height: 'calc(100vh - 82px)' }}
      className='relative bg-gradient-to-t from-gray-100 to-white'
    >
      <div className='main-wrapper flex h-full items-center'>
        <div className='w-1/2'>
          <Title size='huge' className='mb-7 font-bold'>
            World-class psychiatry.
          </Title>
          <Title size='xxxlarge' className='text-black/80'>
            Covered by your insurance
          </Title>
          <p className='mt-3 text-lg text-black/70'>
            Schedule today with a Board-Certified provider and take a leap
            forward in your mental health. Get started with a free consultation!
          </p>

          <a
            href='https://form.jotform.com/231237140729048'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button className='mt-7 px-6 py-3 font-semibold'>Contact us</Button>
          </a>
        </div>
      </div>

      <div className='absolute bottom-0 right-20 h-[90vh] w-[45vw]'>
        <Image
          src={heroImage}
          alt='logo'
          fill
          draggable={false}
          sizes='(min-width: 1024px) 45vw, 80vw'
          className='bottom-0 h-full w-full object-contain object-bottom'
          priority
          quality={90}
        />
      </div>
    </section>
  )
}
