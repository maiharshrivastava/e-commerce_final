import React from 'react';
import { brands } from '../data';

const Brands = () => {
  return (
    <section className='min-h-[146px] bg-black flex items-center'> 
      <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
        {brands.map((brand, index) => (
          <div key={index}>
            <img src={brand.img} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;
