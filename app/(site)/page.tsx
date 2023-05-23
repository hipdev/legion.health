import HomeHero from '@/components/Home/HomeHero'
import HomeMission from '@/components/Home/HomeMission'
import HomeProviders from '@/components/Home/HomeProviders'
import HomeScope from '@/components/Home/HomeScope'
import HomeSteps from '@/components/Home/HomeSteps'

export default function Page() {
  return (
    <>
      <HomeHero />
      <HomeProviders />
      <HomeMission />
      <HomeSteps />
      <HomeScope />
    </>
  )
}
