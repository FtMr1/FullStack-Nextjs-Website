import React from 'react'

const Search = () => {
  return (
    <div className='hidden md:flex flex-1 '>
      <input className='py-2 px-3 rounded-s-md outline-none flex flex-1' type="text" placeholder='Arama Yap' />
        <button className='p-2  bg-slate-700 rounded-e-md  text-white text-sm'>Ara</button>
    </div>
  )
}

export default Search