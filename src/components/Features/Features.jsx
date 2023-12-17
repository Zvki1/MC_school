import './Features.css'
import React from 'react'
import Card from './Card'
import box from '../../assets/skills/Icon_Box.svg'
import box1 from '../../assets/skills/Icon_Box-1.svg'
import box2 from '../../assets/skills/Icon_Box-2.svg'
const Features = () => {
  return (
    <div className='px-8 md:px-24 lg:px-36 xl:px-48 flex flex-col md:flex-row gap-8 py-16  ftr'>
    <Card image={box} skill="Learn more skills" text="The gradual accumulation of information about atomic."/>
    <Card image={box1} skill="Choose courses" text="The gradual accumulation of information about atomic."/>
    <Card image={box2} skill="Learn at your own pace" text="The gradual accumulation of information about atomic."/>
    </div>
  )
}

export default Features