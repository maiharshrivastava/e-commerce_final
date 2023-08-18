import React from 'react'

import TestimonialSlider from '../components/TestimonialSlider'
const Testimonials = () => {
  return (
    <section id='testimonials' className='section
    black bg-secondary'>
    <div className="container mx-auto">
        <div className="flex flex-col items-center
        text-center">
            <h2 className='section-title
            before:content-testimonials relative
            before:absolute before-40 before:-top-
            [2rem] before:-left-64 before:hidden 
            before:lg:block'>
            What other people say
            </h2>
            <p className='subtitle'>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Ipsum numquam architecto
                  illo doloremque atque praesentium? Incidunt
                   minima vero optio, nemo, vitae obcaecati
                    illo animi exercitationem accusamus autem 
                    doloremque, dignissimos beatae!</p>
        </div>
        <TestimonialSlider/>
    </div>
    </section>
  )
}

export default Testimonials
