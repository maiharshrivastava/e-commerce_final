import React from 'react';
import Image from '../assets/img/about.webp';

const About = () => {
  return (
    <section className='section blue-bg-secondary bg-black'>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className='object-cover h-full w-[560px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=""
          />
          <div className="flex flex-col item-center 
          text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
               
                <h2 className='text-3xl lg:text-4xl
                font-medium lg:font-extrabold mb-3
                before:content-about relative
                before:absolute before::opacity-40
                before:-top-[2rem] before:hidden
                 before: lg:block'>
                    Jnae Doe
                 </h2>
                 <p className='mb-4
                 brown text-accent'>Freeance Web Developer</p>
                 <hr className='mb-8 opacity-5'/>
                 <p className='mb-8'>
                    Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Inventore, nemo nam
                      dignissimos deleniti corrupti doloribus
                       tempora sit commodi. Quo quis voluptatem
                        libero earum aliquid consequatur sit 
                        voluptatibus exercitationem at maxime? <br/
                        >Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Inventore, nemo nam
                      d
                 </p>
            </div>
            <button className='btn btn-md brown bg-accent
             brown hover:bg-accent-hover transition-all'>
                Contact me
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
