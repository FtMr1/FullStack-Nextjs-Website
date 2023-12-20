import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='h-[237px] relative bg-black flex items-center justify-center'>
        <div className='h-[137px] '>
            <Image src={"/araekran.jpg"} fill alt='' className=' object-cover'/>
        </div>
    </div>
  )
}

export default Banner