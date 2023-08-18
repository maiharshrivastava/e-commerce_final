import React from 'react';
import WomanImg from '../assets/img/banner-woman2.webp';

const Hero = () => {
  return (
    <section 
      id='home'
      className='lg:h-[85vh] flex items-center 
      black bg-primary lg:bg-cover lg:bg-center 
      lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row items-center h-full pt-8'>
          {/* Left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className='text-lg brown text-accent mb-[22px]'>
              Hey, I'm Jane👋
            </p>
            <h1 className='text-4xl leading-[44px]
              md:text-5xl md:leading-tight lg:text-7xl
              lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I build & Design <br/> web interfaces.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12
             max-w-[480px] text-lg text-center lg:text-left'>
              Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Aspernatur eligendi
             rchitecto suscipit maxime cumque non id,
              commodi ipsam doloribus ipsum repellendus
               alias. Omnis, vel eligendi perferendis
                earum beatae id iste!
                </p>
                <button className='btn btn-md brown bg-accent
                hover:bg-accent-hover md:btn-lg 
                transition-all'>
                  Work with me
                  </button>
          </div>
          {/* Right side */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
