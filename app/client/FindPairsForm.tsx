'use client'

import findPairsByTotal from '@/lib/findPairsByTotal'
import { FormEvent, useRef, useState } from 'react'

export default function FindPairsForm() {
  const [printResults, setPrintResults] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const [total, setTotal] = useState<number>()
  const numbersRef = useRef<HTMLDivElement>(null)

  const findPairsSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!total) {
      setPrintResults('')
      return
    }

    const numbers = numbersRef.current?.innerText
      ? JSON.parse(numbersRef.current?.innerText)
      : []

    const pairs = findPairsByTotal(numbers, total)

    const pairsString = pairs
      .map((subarray) => subarray.join(', '))
      .join(' -- ')
    setPrintResults(pairsString)
    setIsSubmit(true)
  }

  return (
    <form onSubmit={findPairsSubmit}>
      <p className='text-white/70 mt-3'>
        Given these editable array of numbers:
      </p>
      <div
        ref={numbersRef}
        contentEditable
        suppressContentEditableWarning
        className='text-white/80 font-bold mt-1 outline-none text-lg'
      >
        [6, 3, 5, 33, 27, 13, 24, 80, 24 ]
      </div>

      <p className='text-white/70 mt-3'>
        And this editable total, find the pairs for the given total
      </p>

      <input
        defaultValue={total}
        type='number'
        onChange={(e) => setTotal(Number(e.target.value))}
        placeholder='Set a total'
        className='w-28 py-1.5 mt-3 text-center border-b placeholder:text-white/90
        outline-none bg-transparent text-white/80 text-lg font-bold'
        required
      />

      <button className='bg-white w-full rounded-full py-2 mt-7 text-lg hover:bg-white/80 transition-colors'>
        Find pairs
      </button>

      {isSubmit &&
        (printResults !== '' ? (
          <p className='text-white mt-3 font-bold '>
            {' '}
            Woot woot 🥳! <br />
            {printResults}
          </p>
        ) : (
          <p className='text-white/80 font-semibold mt-3'>No pairs found 😕</p>
        ))}
    </form>
  )
}
