import { useRouter } from 'next/router';
import { useState } from 'react';

export interface IBanner {}

const Banner: React.FC<IBanner> = () => {
  // const router = useRouter();
  // const [BannerTerm, setBannerTerm] = useState<string>('');

  return (
    <div className="absolute top-0 left-0 z-0 h-banner w-screen bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
  );
};

export default Banner;
