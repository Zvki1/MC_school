import React from 'react'
import CardPrice from './CardPrice'

const Pricing = () => {
  return (
    // pricipal div
    <div className='bg-[#252B42] px-8 md:px-24 lg:px-36 xl:px-48 py-12'>
        {/* title div */}
       <div className='text-center text-white space-y-3 '>
       <h1 className='text-4xl  font-bold font-[Montserrat] '>Ready to join us?</h1>
        <p className='text-sm font-normal'>Embrace life's vastness, venture forth, and discover the wonders waiting beyond. The world beckons; seize its grand offerings now!</p>
       </div>
    {/* card pricing div */}
        <div className='space-y-5 pt-6 md:space-y-0 md:flex md:flex-row md:items-center md:gap-4 md:pt-11'>
            <CardPrice isbasic={true}/>
            <CardPrice isbasic={false}/>
            <CardPrice isbasic={true}/>
        </div>

    </div>
  )
}

export default Pricing