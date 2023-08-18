import React from 'react'
import Projects from './Projects'

const Portfolio = () => {
  return <section id='portfolio' className='section
   black bg-primary min-h-[1400px]'>
     <div className="container mx-auto"> 
       <div className="flex flex-col items-center text-center">
        <h2 className='section-title before:content-portfolio relative 
        before:absolute before:opacity-40
        before:-top-[2rem] before:-left-3/4
        before:hidden before:lg:block'>
            My latest work
            </h2>
            <p className='subtitle'>
                Lorem ipsum dolor, sit amet consectetur
                 adipisicing elit. Perferendis saepe c
                 upiditate repudiandae eos repellat quaerat. 
                 Ex molestiae aspernatur repellat odit nihil,
                  consequatur beatae quos eligendi enim, magnam,
                   commodi dolores sint.
            </p>
       </div>
       <Projects/>
     </div>
    </section>;
};

export default Portfolio
