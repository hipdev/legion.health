import { Feature, Title } from '@/design-system/index'
import visitIcon from '../../public/visit-icon.jpg'
import followIcon from '../../public/follow-icon.jpg'
import accessIcon from '../../public/access-icon.jpg'

export default function HomeSteps() {
  return (
    <section className='bg-white py-10 md:py-20'>
      <div className='main-wrapper'>
        <Title size='xxlarge' className='mb-2 text-left md:mb-5 md:text-center'>
          We believe in clear and transparent care:
        </Title>
        <div className='flex flex-col gap-7 py-4 md:flex-row md:gap-10 md:py-10'>
          <Feature
            title='1. Initial visit'
            description='50 minute visit to go over medical history, diagnose any current issues, develop a treatment plan, and prescribe any necessary medications            '
            picture={visitIcon}
          />
          <Feature
            title='2. Follow-up'
            description='30-minute check-ups once every month to two months to manage medication and ensure overall wellness'
            picture={followIcon}
          />
          <Feature
            title='3. Instant access'
            description='If anything changes, you can reach a member of our team within a matter of minutes, and get help from a provider in the next business day'
            picture={accessIcon}
          />
        </div>
      </div>
    </section>
  )
}
