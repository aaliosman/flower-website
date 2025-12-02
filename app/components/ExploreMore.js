import SwiperComponent from "./Swiper";
const ExploreMore = () => {
  return (
    <section className=" explore w-full h-[650px] mt-[200px] relative">
      <div className="content w-[600px] h-[400px] absolute left-[30%] top-[10%]">
        {/* <h1>Flowers</h1>
        <p>Best Flowers</p> */}
        <SwiperComponent />
      </div>
    </section>
  );
};
export default ExploreMore;
