'use client';

import { useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function VideoPlayer({ src, poster, className }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div
      className={`relative w-full aspect-video bg-black overflow-visible ${
        className || ''
      }`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        // playsInline
        className="w-full h-full object-cover"
        controls={isPlaying}
      />

      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="
            absolute inset-0 flex items-center justify-center
            bg-black/40 
            transition-opacity duration-300
          "
        >
          <div
            className="
              w-20 h-20 rounded-full
              bg-white/90
              flex items-center justify-center
              shadow-xl
              transition hover:scale-105 active:scale-95
            "
          >
            <div
              className="
                w-0 h-0
                border-t-10 border-b-10 border-l-16
                border-transparent border-l-black
                ml-1
              "
            />
          </div>
        </button>
      )}

      {!isPlaying && (
        <div className="w-[500px] how-it-works absolute -bottom-[130px] z-40 left-16 bg-white p-8 shadow-2xl">
          <h1 className="text-secondary font-semibold text-3xl mb-6">
            How it works?
          </h1>
          <p>
            A flower, sometimes known as a bloom or blossom, is the reproductive
            structure found in flowering plants (plants of the division
            Magnoliophyta, also called angiosperms).
          </p>

          <div className="read-more flex relative top-15">
            <div className="icon bg-primary text-white p-4">
              <ChevronRight />
            </div>
            <Link className="text-white bg-secondary p-4" href="/">
              Read More
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
