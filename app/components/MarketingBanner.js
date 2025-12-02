const MarketingBanner = () => {
  return (
    <div className="container w-full mx-auto flex justify-center">
      <div className="w-[1400px] h-[180px] flex items-center mx-auto bg-white shadow-2xl absolute -bottom-30">
        <div className="container w-full relative flex justify-end items-center max-w-6xl mx-auto">
          <div className="img border flex justify-right">
            <img
              src="/images/f3.png"
              className=" absolute -left-[70px] -bottom-22"
              alt="f3-image"
            />
          </div>
          <div className="content flex-1 absolute left-60 flex items-center justify-between gap-[100px] p-8">
            <div className="text-content flex flex-col gap-4">
              <h1 className=" text-3xl/[40px] text-secondary">
                Valentine's day amazing offer!
              </h1>

              <p className="text-gray-500">
                Valentine's Day, also called Saint Valentine's Day or the Feast
                of Saint Valentine, is celebrated annually on February 14.
              </p>
            </div>

            <button className="min-w-[150px] cursor-pointer px-4 py-4 bg-secondary text-white hover:bg-white hover:text-secondary">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MarketingBanner;
