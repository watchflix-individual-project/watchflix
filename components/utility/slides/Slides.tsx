import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Card from '../card/Card';
import Button from '@mui/material/Button';
export interface ISlides {
  // title: string;
}

const Slides: React.FC<ISlides> = (_) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      <Button onClick={() => swiper!.slidePrev()}>prev</Button>
      <Button onClick={() => swiper!.slideNext()}>next</Button>
      <Swiper
        onSwiper={setSwiper}
        slidesPerView={4}
        spaceBetween={30}
        className="mySwiper px-10"
      >
        <SwiperSlide>
          <Card title="juudl" description="loremips" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="juudl" description="loremips" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="juudl" description="loremips" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="juudl" description="loremips" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="juudl" description="loremips" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="juudl" description="loremips" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="juudl" description="loremips" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="juudl" description="loremips" />
        </SwiperSlide>
        <SwiperSlide>
          <Card title="juudl" description="loremips" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slides;
