import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-full h-[300px] flex">
      <div className=" flex justify-center items-start w-[700px] h-[300px]  bg-secondary">
        <Image
          className="mt-12"
          src="/images/logo2.png"
          alt="logo"
          width={200}
          height={200}
        />
      </div>
      <div className=" w-[2000px] h-[300px] bg-gray flex items-start pt-12 pl-16 gap-12">
        <div className="mr-6">
          <h2 className="text-primary font-bold mb-8">CONTACT</h2>
          <p>
            info@xtraflower.com <br />
            +1 (800) 345 – 678
          </p>
        </div>
        <div className="mr-6">
          <h2 className="text-primary font-bold mb-8">ADDRESS</h2>
          <p>
            1079 Terry Lane
            <br /> Winter Park, Florida
          </p>
        </div>
        <div>
          <h2 className="text-primary font-bold mb-8">WORKING HOURS</h2>
          <p>
            Mon-Fri 9 ~ 18
            <br /> Sat-Sun 10~ 20
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
