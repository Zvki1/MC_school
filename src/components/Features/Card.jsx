/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const Card = ({image,skill,text}) => {
  return (
    <div className=" bg-white space-y-5 text-center flex flex-col items-center px-10 py-9 rounded-xl text-[#252B42] font-[Montserrat] text-base font-bold ">
    <img src={image}  alt="Feature" />
    <h3>{skill}</h3>
    <p className=' font-normal text-sm '>{text}</p>
  </div>
  )
}

export default Card