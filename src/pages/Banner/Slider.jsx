'use client';

import { Carousel } from 'flowbite-react';
import slide1 from '../../assets/slider/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg';
import slide2 from '../../assets/slider/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg';
import slide3 from '../../assets/slider/scott-graham-OQMZwNd3ThU-unsplash.jpg';
export default function StaticCarousel() {

  return (
    <>

    <Carousel className='h-96'>
      <div>
        <div>
            afdasdsda
        </div>
      <img
        alt="..."
        src={slide1}
      />
      </div>
      <img
        alt="..."
        src={slide2}
      />
      <img
        alt="..."
        src={slide3}
      />
     
    </Carousel>
    </>
    
  )
}


