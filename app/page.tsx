import FindPairsForm from './client/FindPairsForm'

export default function Page() {
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className='bg-black/80 w-96 px-6 py-4 rounded-md shadow-lg pb-7 text-center'>
        <h3 className='text-2xl font-semibold text-white/90'>Test case</h3>

        <FindPairsForm />
      </div>
    </section>
  )
}
