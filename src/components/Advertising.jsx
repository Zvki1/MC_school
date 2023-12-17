import React from 'react'
import desk from '../assets/advertising_cover.jpg'
import Info from './Info'
import graph from '../assets/graph.svg'
import message from '../assets/message.svg'
import valid from '../assets/valid.svg'
const Advertising = () => {
    
  return (
    <div className='bg-[#252B42] px-8 md:px-24 lg:px-36 xl:px-48 py-12 flex gap-20'>
        <img src={desk} alt=""  className='hidden sm:block w-2/5 object-cover max-h-[500px] rounded-tl-2xl rounded-br-2xl '/>
        <div className=' space-y-6  sm:w-3/5 '>
            <h2 className='text-white font-[Montserrat] font-bold text-2xl text-center sm:text-start'> We take the work <br /> off   your hands.</h2>
            <p className='text-[#ECECEC] font-[Montserrat] text-base font-normal text-center sm:text-start' >Embrace life's vastness, venture forth, and discover the wonders waiting beyond. The world beckons; seize its grand offerings now!</p>
            <div className=' space-y-4'>
                <Info isbg={true}  isborder={false} pic={graph} title="Interactive Courses"/>
                <Info isbg={false} isborder={true} pic={valid} title="Flexible Learning"/>
                <Info isbg={false} isborder={true} pic={message} title="Expert Instructors"/>
            </div>
        </div>     

    </div>
  )
}

export default Advertising