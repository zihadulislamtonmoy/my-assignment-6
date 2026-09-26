import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className=" bg-[#0b0c0f]  flex justify-between footer sm:footer-horizontal footer-centers text-base-content p-8">
            <div className="flex items-center">
                      <Image
                        src={logo}
                        alt="FitnessLogo"
                        width={85}
                        height={30}
                        className=" h-auto w-auto max-h-[30pxS] object-contain mx-auto"
                      />
            
                      <h2 className='font-bold m-1.5'>FITLOG</h2>
                    </div>
  <aside>
    <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
  </aside>
</footer>
    );
};

export default Footer;