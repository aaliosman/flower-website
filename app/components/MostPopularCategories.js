import Image from 'next/image';
const MostPopularCategories = () => {
  return (
    <div className=" max-w-7xl mx-auto mt-[150px]">
      <h1 className="title text-4xl/[80px] text-primary flex justify-center items-center mb-6">
        Most Popular <span className="text-secondary"> Categories</span>
      </h1>
      <div className="parent border-secondary flex gap-10 justify-center items-center">
        <div className=" left-side  h-full flex flex-col justify-center items-between">
          <div className="w-[550px] h-[300px] relative hover:w-[600px] transition-all transform">
            <h1 className="font-blod flex justify-left text-2xl font-bold absolute top-[50%] left-[10%]">
              House Plants
            </h1>
            <img
              className="  w-full h-auto object-cover m-0 p-0 "
              src="/images/c3.jpg"
            />
          </div>
          <div className="w-[550px] h-[300px] relative">
            <h1 className="font-blod flex justify-left text-2xl font-bold absolute top-[40%] left-[10%]">
              Best Sellers
            </h1>
            <img
              className="  w-full h-auto object-cover m-0 p-0"
              src="/images/c4.jpg"
            />
          </div>
        </div>
        <div className="right-side  flex gap-6 h-full ">
          <div className="w-[300px] h-[600px] relative">
            <h1 className="font-blod flex justify-left text-2xl font-bold absolute top-[20%] left-[30%]">
              Wedding
            </h1>
            <img
              className=" w-full h-full object-cover m-0 p-0"
              src="/images/c2.jpg"
            />
          </div>
          <div className="w-[300px] h-[600px] relative">
            <h1 className="font-blod flex justify-left text-2xl font-bold absolute top-[20%] left-[40%]">
              Valentine
            </h1>
            <img
              className="  w-full h-full object-cover m-0 p-0"
              src="/images/c1.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MostPopularCategories;
