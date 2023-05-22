import { Title } from '@/design-system/index'
import Image from 'next/image'

export default function HomeMission() {
  return (
    <section className='relative py-20'>
      {/* Absolute background */}
      <Image
        src='/hand-bg.jpg'
        alt='BlueCross BlueShield'
        className='absolute left-0 top-0 h-full w-full object-cover'
        fill
      />

      <div className='main-wrapper relative'>
        <div className='w-1/2'>
          <Title intent='secondary' size='xxlarge'>
            Our mission
          </Title>
          <Title
            intent='secondary'
            size='xxxlarge'
            className='mb-4 mt-2 font-medium'
          >
            Bring quality psychiatric care to all
          </Title>
          <p className='mb-4 text-lg text-white/90'>
            According to experts, 1 out of 2 Americans seeking psychiatric care
            never receive it. We exist to help people win the fight against
            anxiety and depression– for good!
          </p>
          <p className='text-lg text-white/90'>
            We invest in highly–trained, compassionate providers, excellent
            technology, and strong relationships to bring world-class care to
            all.
          </p>
        </div>
      </div>
    </section>
  )
}
