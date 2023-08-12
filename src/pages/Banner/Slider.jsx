'use client';
import CustomHeading from '../../components/CustomHeading';
import './Banner.css';
import { Carousel } from 'flowbite-react';
import { FaArrowRight } from 'react-icons/fa';
export default function StaticCarousel() {

  return (
    <>

    <Carousel className='md:h-[800px] -mt-1 z-0 '>
      {/* slider-1 */}
      <div className='slider-1 flex flex-col justify-center items-center text-white'>
        <div>
          <CustomHeading subheading={'We Make Smile'}></CustomHeading>
        </div>
        <div className='text-center md:text-3xl lg:text-5xl text-xl font-bold'>
          <h1>For our upcomming business <br/> partners and client</h1>
        </div>
        <div className='text-center w-1/3 mt-5'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, consectetur exercitationem. Repudiandae fuga excepturi aspernatur mollitia illo nihil eos quos consectetur, ullam harum. Molestiae odio ut fugiat. Ut, voluptas temporibus.
        </div>
        <div className='flex gap-10 mt-5'>
         
   
         <button className='flex items-center gap-3 btn  text-white text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 py-3 px-8 rounded hover:bg-white hover:text-black'> Learn More <FaArrowRight/></button>  
     
          <button className='flex items-center gap-3 bg-white text-black transition-all duration-200  hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-500 hover:text-white px-8 py-3 text-2xl rounded'>Contact Us <FaArrowRight/></button>
        </div>
      </div>

      {/* slider-2 */}
      
      <div className='slider-2 flex flex-col justify-center items-center text-white'>
        <div>
          <CustomHeading subheading={'We Make Smile'}></CustomHeading>
        </div>
        <div className='text-center md:text-3xl lg:text-5xl text-xl font-bold'>
          <h1>For our upcomming business <br/> partners and client</h1>
        </div>
        <div className='text-center w-1/3 mt-5'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, consectetur exercitationem. Repudiandae fuga excepturi aspernatur mollitia illo nihil eos quos consectetur, ullam harum. Molestiae odio ut fugiat. Ut, voluptas temporibus.
        </div>
        <div className='flex gap-10 mt-5'>
         
   
         <button className='flex items-center gap-3 btn  text-white text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 py-3 px-8 rounded hover:bg-white hover:text-black'> Learn More <FaArrowRight/></button>  
     
          <button className='flex items-center gap-3 bg-white text-black transition-all duration-200  hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-500 hover:text-white px-8 py-3 text-2xl rounded'>Contact Us <FaArrowRight/></button>
        </div>
      </div>

     {/* slider-3 */}
     <div className='slider-1 flex flex-col justify-center items-center text-white'>
        <div>
          <CustomHeading subheading={'We Make Smile'}></CustomHeading>
        </div>
        <div className='text-center md:text-3xl lg:text-5xl text-xl font-bold'>
          <h1>For our upcomming business <br/> partners and client</h1>
        </div>
        <div className='text-center w-1/3 mt-5'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, consectetur exercitationem. Repudiandae fuga excepturi aspernatur mollitia illo nihil eos quos consectetur, ullam harum. Molestiae odio ut fugiat. Ut, voluptas temporibus.
        </div>
        <div className='flex gap-10 mt-5'>
         
   
         <button className='flex items-center gap-3 btn  text-white text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 py-3 px-8 rounded hover:bg-white hover:text-black'> Learn More <FaArrowRight/></button>  
     
          <button className='flex items-center gap-3 bg-white text-black transition-all duration-200  hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-500 hover:text-white px-8 py-3 text-2xl rounded'>Contact Us <FaArrowRight/></button>
        </div>
      </div>

    </Carousel>
    </>
    
  )
}


