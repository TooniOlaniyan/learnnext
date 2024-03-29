import Filters from '@/components/Filters'
import SearchForm from '@/components/SearchForm'
import { getResource } from '@/sanity/lib/actions'
import React from 'react'

const page = async () => {

  const resource = await getResource({
    query:'',
    category:'',
    page:'1'
  })

  console.log(resource)
  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover text-center bg-center'>
          <h1 className='sm:heading1 heading2 mb-6 text-center text-white'>Javascript Mastery Resources</h1>
        </div>
        <SearchForm/>
      </section>

      {/* Filters */}
      <Filters/>

    </main>
  )
}

export default page