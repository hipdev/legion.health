import { Button, Title } from '@/design-system/index'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { RiForbid2Line } from 'react-icons/ri'
import Image from 'next/image'

const weTreat = [
  'Anxiety disorders',
  'Depression',
  'ADHD',
  'Imsonia/sleep disorders',
  'Premenstrual Dysphoric Disorder',
]
const weDontTreat = [
  'Controlled substances',
  'Alcohol or substance use disorders',
  'Schizophrenia',
  'Severe personality disorders',
  'Ketamine/psychedelic treatments',
]

export default function HomeScope() {
  return (
    <section className='relative bg-white py-10 md:py-20'>
      <Image
        draggable={false}
        src='/scope-bg.png'
        alt='Scope section background'
        className='absolute left-0 top-0 h-full w-full object-cover'
        fill
        priority
        sizes='(min-width: 1024px) 50vw, 100vw'
      />
      <div className='main-wrapper relative'>
        <div className='flex flex-col justify-between gap-10 md:flex-row md:gap-16'>
          <div className='md:w-1/2'>
            <Title
              intent='secondary'
              size='xxxlarge'
              className='mb-7 font-semibold'
            >
              Scope of practice
            </Title>
            <p className='text-gray-100 md:text-lg'>
              We see all patients via secure telemedicine visits. We are located
              in Austin, TX, and focus on treatment for anxiety, depression, and
              other disorders. Not every patient is a good fit for the
              treatments our providers are able to offer. If you have any
              questions, please call and our intake specialist will help guide
              you!
            </p>

            <Button intent='secondary' className='mt-10 px-10'>
              Contact us
            </Button>
          </div>
          <div className='flex flex-col justify-between gap-4 md:w-1/2 md:flex-row'>
            <div>
              <Title intent='secondary' size='xlarge' className='mb-3'>
                ​What we treat:
              </Title>
              {weTreat.map((item) => (
                <p
                  key={item}
                  className='mb-2 flex items-center gap-3 text-gray-50 md:text-lg'
                >
                  <AiOutlineCheckCircle />
                  {item}
                </p>
              ))}
            </div>
            <div>
              <Title intent='secondary' size='xlarge' className='mb-3'>
                Not covered at this time:
              </Title>
              {weDontTreat.map((item) => (
                <p
                  key={item}
                  className='mb-2 flex items-center gap-3 text-gray-50 md:text-lg'
                >
                  <RiForbid2Line />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
