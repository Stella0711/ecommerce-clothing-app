import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

        <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ABOUT'} text2={'US'} />
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At FOREVER, we believe great style should feel effortless. Our collection is designed with modern, versatile pieces that make it easy to express your personal style, whether you're dressing up, keeping it casual, or somewhere in between.</p>
            <p>We’re committed to bringing you quality clothing at accessible prices, with new styles selected to keep your wardrobe feeling fresh. From everyday essentials to statement pieces, FOREVER is here to help you look and feel your best—today and for every season to come.</p>
              <b>Our Mission:</b>
              <p>To provide high-quality, stylish clothing that empowers individuals to express themselves confidently and comfortably.</p>
            </div>
        </div>
        
        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>At FOREVER, we carefully select and inspect every piece to ensure it meets our standards for quality, comfort, and style. From the materials we choose to the finishing details, we’re committed to providing clothing you can feel confident wearing again and again.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>We make shopping for your favorite styles simple and convenient. With an easy-to-browse collection, secure checkout, and hassle-free ordering, finding the perfect pieces for your wardrobe has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>At FOREVER, we believe your experience should be just as enjoyable as the clothes you purchase. Our team is committed to providing friendly, responsive support and making sure every customer feels valued from the moment they shop with us.</p>
          </div> 
        </div>

        <NewsletterBox />
        
    </div>
  )
}

export default About