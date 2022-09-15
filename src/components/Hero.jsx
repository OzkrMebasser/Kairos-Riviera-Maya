import React from 'react';
import Typed from 'react-typed';
import Wrapper from '../components/Hero/Title';
import Title from '../components/Hero/Wrapper';
import HeroSlider, { Overlay, Slide } from "hero-slider";
import acePhoto1 from '../assets/ace.jpg'
import acePhoto2 from '../assets/ace2.jpg'


const Hero = () => {

  
  return (
    

    
    <div className='text-white'>

      <HeroSlider className=" "
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 300,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay >
        <Wrapper >
          <Title>
          <div className='max-w-[800px] mt-[0] h-screen mx-auto text-center flex flex-col justify-center'>
        
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6 '>
          Kairos Riviera Maya
        </h1>
        <div className='flex justify-center items-center'>
          
          <Typed
          className='mt-6 md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 z-50'
            strings={['The best School in Riviera Maya']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        {/* <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p> */}
        <button className='z-50 mt-20 bg-[white] text-[#0c2e51] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Contact us</button>
      </div>
          </Title>
      
        </Wrapper>
      </Overlay>

      <Slide
        // shouldRenderMask   
        background={{
          backgroundImage: acePhoto1,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        // shouldRenderMask     
        background={{
          backgroundImage: acePhoto2,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        shouldRenderMask      
        background={{
          backgroundImage: acePhoto1,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        shouldRenderMask        
        background={{
          backgroundImage: acePhoto2,
          backgroundAttachment: "fixed"
        }}
      />

     
    </HeroSlider>
    </div>
  );
};

export default Hero;
