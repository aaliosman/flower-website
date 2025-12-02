'use client';
import CreateHeading from './createHeading';
import Image from 'next/image';
import { Star, StarHalf, StarOff } from 'lucide-react';
import { useState } from 'react';

const Stars = ({ rating = 0, size = 16 }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (rating >= i + 1)
      return <Star key={i} size={size} className="text-yellow-500" />;

    if (rating >= i + 0.5)
      return <StarHalf key={i} size={size} className="text-yellow-500" />;

    return <StarOff key={i} size={size} className="opacity-40" />;
  });

  return <div className="flex items-center gap-1">{stars}</div>;
};

const BestSeller = ({ data }) => {
  const [itemToShow, setItemToShow] = useState(4);

  if (!data) {
    return <p>...loading</p>;
  }

  // sm md lg xl xxl 2xl

  return (
    <section className="w-full p-4 md:p-0 mx-auto flex flex-col items-center gap-14 border">
      <div className="text-center">
        {CreateHeading({
          parts: [data.title, data.hightLightedTitle],
          highlightIndex: 0,
        })}
      </div>
      <div className="products w-full flex flex-col md:flex-row justify-center gap-8">
        {data.products.slice(0, itemToShow).map((product, i) => {
          return (
            <div key={i} className="productCard ">
              <div className="relative">
                <div className="flex flex-col gap-1 absolute right-0 top-0 text-center ">
                  {' '}
                  <span className=" bg-secondary text-white py-1 px-2">
                    {product.isIvalible ? 'Sale' : 'Sale!'}
                  </span>
                  <span className="bg-secondary text-white py-1 px-2">
                    {product.disciount}
                  </span>
                </div>
                <div className="absolute top-0 left-0 flex items-center gap-2">
                  <Stars rating={product.rating ?? 0} size={18} />
                  <span className="text-sm font-semibold">
                    {product.rating?.toFixed(1) ?? '0.0'}
                  </span>
                </div>
                <Image
                  width={400}
                  height={100}
                  src={product.image}
                  alt="product-image"
                />
              </div>
              <div className=" relative w-full flex  flex-col justify-center items-center gap-6 p-4">
                <h1 className="text-3xl font-semibold">{product.title}</h1>
                <p>{product.category}</p>

                <p className="font-bold text-xl">{product.price} $</p>
              </div>
            </div>
          );
        })}
      </div>

      {data.products.length > 4 ? (
        <button
          onClick={() => {
            if (itemToShow == 4) {
              setItemToShow(data.products.length);
            } else {
              setItemToShow(4);
            }
          }}
          className="bg-white text-secondary hover:bg-secondary hover:text-white px-6 py-4 ring-2"
        >
          {itemToShow == 4 ? ' View More' : 'Show Less'}
        </button>
      ) : null}
    </section>
  );
};
export default BestSeller;
