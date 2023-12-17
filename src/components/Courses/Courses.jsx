// eslint-disable-next-line no-unused-vars
import React from 'react'
import Course from './Course'
import first from "../../assets/courses/first.jpg";
import third from "../../assets/courses/thirs.jpg";

const Courses = () => {
  return (
    // initial div
    <div className='px-8 md:px-24 lg:px-36 xl:px-48 py-12 bg-[#252B42]'>
        {/* explore div */}
        <div className='flex flex-row justify-between items-center'>
            <h3 className=' font-[Montserrat] text-[26px] font-bold text-white  '>Explore Featured <br /> Products</h3>
            <a href="" className='font-[Montserrat] text-sm font-bold text-white hover:text-blue-500 duration-300'>View all</a>
        </div>
       
        {/* courses div */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-4 gap-y-8 pt-6'> 
            <Course pic={first} title="Figma Ui Design" author="REGUIEG Zakaria"/>
            <Course pic={third} title="Figma Ui Design" author="REGUIEG Zakaria"/>
            <Course pic={first} title="Figma Ui Design" author="REGUIEG Zakaria"/>
            <Course pic={third} title="Figma Ui Design" author="REGUIEG Zakaria"/>
            <Course pic={first} title="Figma Ui Design" author="REGUIEG Zakaria"/>
            <Course pic={third} title="Figma Ui Design" author="REGUIEG Zakaria"/>
        </div>
    </div>
  )
}

export default Courses