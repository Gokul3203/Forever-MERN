import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:e-2/4 text-gray-600'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium inventore ad minima eaque consequuntur odit modi quas delectus numquam iste ullam, eligendi dolores quo nihil. Earum laboriosam dignissimos consequatur?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, officia, eos quas, non vero enim blanditiis vitae voluptas recusandae nam ipsam facilis consequatur laborum perferendis? Provident facere placeat itaque reiciendis.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quibusdam, voluptates in quae veritatis vel commodi ut! Fugiat tempora, cupiditate debitis enim obcaecati eius quas odit voluptatum rem reprehenderit a. Ducimus eum, sunt a consectetur dolorum sequi cupiditate voluptatem praesentium eos tempora nam nulla eius, at provident labore! Possimus, consequatur.</p>
        </div>

      </div>
      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quidem ea odit. Eveniet accusamus ullam at est iste praesentium maxime.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quidem ea odit. Eveniet accusamus ullam at est iste praesentium maxime.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quidem ea odit. Eveniet accusamus ullam at est iste praesentium maxime.</p>
        </div>

      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About