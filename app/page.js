'use client';
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import BestSeller from './components/BestSeller';
import ExploreMore from './components/ExploreMore';
import MostPopularCategories from './components/MostPopularCategories';
import VideoPlayer from './components/Video';

// https://xtratheme.com/elementor/flower-shop/
// https://preview.themeforest.net/item/propus-web-designer-portfolio-elementor-template-kit/full_screen_preview/30585489
// https://portfolio-next-7jehv936s-aaliosman.vercel.app

export default function Home() {
  const [homePageData, setHomePageData] = useState([]);

  if (!homePageData) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/home');
        const data = await response.json();
        if (response.ok) {
          setHomePageData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col min-h-screen items-start justify-center bg-zinc-50 mb-[200px] w-full">
      <Hero data={homePageData && homePageData.hero} />
      <BestSeller data={homePageData.productsSection} />
      <ExploreMore />
      <div className="w-full">
        <MostPopularCategories />
      </div>
      <div className="video mt-16 max-w-7xl mx-auto">
        <VideoPlayer
          src={'/855976-hd_1920_1080_25fps.mp4'}
          poster={
            'https://xtratheme.com/elementor/flower-shop/wp-content/uploads/sites/70/2021/09/video3.jpg'
          }
        />
      </div>
    </div>
  );
}
