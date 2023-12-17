/* eslint-disable react/prop-types */

import React from 'react'

const Info = ({isbg,pic,title,isborder}) => {

  return (
    
    <div className={`${isbg ? (" bg-white text-[#252B42]  "):("bg-none border-2 border-white border-dashed text-white") }  flex flex-col md:flex-row items-center text-center md:text-start gap-4 p-6 rounded-3xl`}>
      <img src={pic} alt="" />
      <div className='flex flex-col md:gap-3 '>
        <h4 className=' text-base font-bold'>{title}</h4>
        <p className=' text-xs font-normal'>Things on a very small scale behave like nothing that you have any direct experience</p>
      </div>
    </div>
  )
}

export default Info