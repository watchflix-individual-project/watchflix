//import { useRouter } from 'next/router';
import React from 'react';
//import Image from 'next/image';

export interface IBanner {
  title: string;
  description: string;
}

const Banner: React.FC<IBanner> = ({ title, description }) => {
  return (
    <div className="relative bg-slate-400 w-full  banner">
      <div className="video-wrapper">
        <video
          className="w-full h-full object-cover"
          webkit-playsinline="true"
          playsInline
          autoPlay={true}
          loop
          muted
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="absolute spotlight-txt text-white">
        <h1 className="m-5 text-xl font-bold">{title}</h1>
        <p className="m-5 w-1/2">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
