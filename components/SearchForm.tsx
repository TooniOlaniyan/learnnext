'use client'
import Image from 'next/image'
import { Input } from './ui/input'
import {useState} from 'react'

const SearchForm = () => {
    const [search, setSearch] = useState('')
  return (
    <form className='flex-center mt-10 mx-auto w-full sm:-mt-10 sm:px-5'>
        <label className='flex-center w-full relative max-w-3xl' htmlFor="">
            <Image className='absolute left-8' src='/magnifying-glass.svg' width={32} height={32} alt='magnifying icon'/>
            <Input value={search} onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search' className='base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800' />
        </label>

    </form>
  )
}

export default SearchForm