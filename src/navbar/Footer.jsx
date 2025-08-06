import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="w-full h-auto md:h-[55px] sticky bottom-0 flex flex-col md:flex-row items-center justify-between px-4 py-3 md:py-0">
        
        <div className="flex-1 md:flex-[2] flex items-center justify-center md:justify-start mb-2 md:mb-0">
          <h1 className="text-2xl md:text-[33px] font-bold">
            <b>Blog</b>
          </h1>
        </div>

       
        <div className="flex-1 md:flex-[6] order-last md:order-none my-2 md:my-0">
          <p className="text-sm md:text-base text-center">
            © 2025 Blog. All rights are reserved.
          </p>
        </div>

        
        <div className="flex-1 md:flex-[3] flex items-center justify-center md:justify-end">
          <div className="flex gap-3 md:gap-4 text-xl md:text-[25px]">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-square-facebook"></i>
            </a>

            <a 
              href="mailto:linatemam0707@gmail.com" 
              className="hover:text-red-500 transition-colors"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>

            <a 
              href="https://t.me/@sin_wan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="Telegram"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;