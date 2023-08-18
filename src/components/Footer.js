import React from 'react';
import { social } from '../data';
import Logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className='black bg-tertiary py-12'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          {/* Social icons */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a href={href} key={index} className="text-accent hover:text-accent-hover">
                  {icon}
                </a>
              );
            })}
          </div>
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
