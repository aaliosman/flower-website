import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function SwiperComponent() {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isEndSlide, setIsEndSlide] = useState(false);
  const [isStartSlide, setIsStartSlide] = useState(false);

  const Items = [
    {
      id: 1,
      title: (
        <h3 className="text-2xl font-semibold mb-4">
          1XTRA is an online <br /> flower shop and <br /> delivery
        </h3>
      ),
      text: (
        <p>
          A flower, sometimes known as a bloom or blossom, is the reproductive
          structure found in flowering plants.
        </p>
      ),
    },
    {
      id: 2,
      title: (
        <h3 className="text-2xl font-semibold mb-4">
          2XTRA is an online <br /> flower shop and <br /> delivery
        </h3>
      ),
      text: (
        <p>
          A flower, sometimes known as a bloom or blossom, is the reproductive
          structure found in flowering plants.
        </p>
      ),
    },
    {
      id: 3,
      title: (
        <h3 className="text-2xl font-semibold mb-4">
          3XTRA is an online <br /> flower shop and <br /> delivery
        </h3>
      ),
      text: (
        <p>
          A flower, sometimes known as a bloom or blossom, is the reproductive
          structure found in flowering plants.
        </p>
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <div className="absolute -right-1 -bottom-15 p-1 z-20 flex">
        <button
          ref={prevRef}
          className={`w-14 h-14 bg-black/80 shadow-md flex items-center justify-center hover:bg-black/20 transition ${
            isStartSlide == 0 && 'opacity-[0.5]'
          }`}
        >
          <span className="text-xl text-white">
            <ChevronLeft />
          </span>
        </button>

        <button
          ref={nextRef}
          disabled={isEndSlide}
          className={`w-14 h-14 bg-black/80 shadow-md flex items-center justify-center hover:bg-black/20 transition ${
            isEndSlide && 'opacity-[0.5]'
          }`}
        >
          <span className="text-xl text-white">
            <ChevronRight />
          </span>
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;

          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={(swiper) => {
          setIsEndSlide(() => swiper?.isEnd);
          setIsStartSlide(() => swiper.activeIndex);
        }}
        className="mySwiper h-full bg-green-700"
      >
        {Items.map((item, i) => (
          <SwiperSlide key={i} className="p-16 text-white">
            {item.title}
            {item.text}

            <p className="mt-8 opacity-70">
              {i + 1} / {Items.length}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
