import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#F5F2EB] min-h-screen flex flex-col justify-between">
      <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        {/* Left Column */}
        <div>
          <h2 className="text-6xl md:text-8xl lg:text-[137px] font-sans font-medium tracking-tighter text-[#111] leading-none">
            Contact us
          </h2>
        </div>

        {/* Right Column */}
        <div className="flex flex-col pt-4 lg:pt-8">
          <p className="text-xl md:text-2xl text-[#333] font-light leading-relaxed mb-12 max-w-xl">
            If you have questions or need any general information, please complete this form to request the information you need. It will be an honor to help you.
          </p>

          {/* Form */}
          <form className="w-full max-w-xl space-y-8 mb-16">
            <div className="relative">
              <input 
                type="text" 
                id="name" 
                className="peer w-full py-3 bg-transparent border-b border-[#D6D1C7] focus:outline-none focus:border-[#111] transition-colors placeholder-transparent text-[#111]" 
                placeholder="Name" 
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 top-3 text-[#A8A29E] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#111] cursor-text"
              >
                Name
              </label>
            </div>
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                className="peer w-full py-3 bg-transparent border-b border-[#D6D1C7] focus:outline-none focus:border-[#111] transition-colors placeholder-transparent text-[#111]" 
                placeholder="Email" 
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-3 text-[#A8A29E] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#111] cursor-text"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <textarea 
                id="message" 
                rows={1} 
                className="peer w-full py-3 bg-transparent border-b border-[#D6D1C7] focus:outline-none focus:border-[#111] transition-colors placeholder-transparent resize-none text-[#111]" 
                placeholder="Message"
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-0 top-3 text-[#A8A29E] text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#111] cursor-text"
              >
                Message
              </label>
            </div>
            <button 
              type="button" 
              className="group flex items-center gap-4 text-sm font-medium uppercase tracking-widest hover:opacity-70 transition-opacity pt-4"
            >
              Submit
              <span className="block w-8 h-[1px] bg-[#111] group-hover:w-16 transition-all duration-500"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
