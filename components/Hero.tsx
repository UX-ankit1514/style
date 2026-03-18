/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Manual scroll calculation to account for fixed header
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL hash without jumping, safely ignoring errors in sandboxed environments
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError in restricted environments
      }
    }
  };

  return (
    <section className="relative w-full pt-40 pb-20 px-6 bg-[#F5F2EB] text-center">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="animate-fade-in-up w-full md:w-auto">
          <span className="block text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-[#A8A29E] mb-6">
            Spring Collection 2025
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-normal text-[#2C2A26] tracking-tight mb-8 drop-shadow-sm">
            Quiet <span className="italic text-[#5D5A53]">living.</span>
          </h1>
          <p className="max-w-lg mx-auto text-lg md:text-xl text-[#5D5A53] font-light leading-relaxed mb-12 text-shadow-sm">
            Clothing designed to disappear into your life. <br/>
            Warm materials, comfortable fits, natural forms.
          </p>
          
          <a 
            href="#products" 
            onClick={(e) => handleNavClick(e, 'products')}
            className="group relative px-10 py-4 bg-[#2C2A26] text-[#F5F2EB] rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-[#433E38] transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl inline-block"
          >
            <span className="relative z-10">View Collection</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
