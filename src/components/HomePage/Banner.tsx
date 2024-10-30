// components/HomePage/Banner.js
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full md:py-5 py-5">
      {/* BANNER-TOP */}
      <div className="flex w-full lg:h-[50vh] md:h-[55vh] h-[30vh] gap-2 py-1">
        <div className="w-full lg:w-3/4 relative border-2 border-white rounded-md shadow-lg p-4 bg-white">
          <Image
            src="https://file.hstatic.net/200000420363/file/slide-tong-5-nganh-hang.jpg"
            alt="Banner Image"
            layout="fill"
            objectFit="fill"
          />
        </div>
        <div className="w-1/4 relative hidden lg:block border-2 border-white rounded-md shadow-lg p-4 bg-white">
          <Image
            src="https://theme.hstatic.net/200000420363/1001292105/14/infotabzzimg1.png?v=188"
            alt="Side Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* BANNER-BOTTOM */}
      <div className="flex w-full lg:h-[20vh] md:h-[15vh] h-[12vh] gap-2">
        <div className="flex w-full lg:w-3/4 relative border-2 border-white rounded-md shadow-lg bg-white">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-full lg:w-1/3 h-full relative border-2 border-white rounded-md shadow-lg p-4 bg-white"
            >
              <Image
                src={`https://file.hstatic.net/200000722513/file/banner_${
                  index + 1
                }.jpg`}
                alt={`Banner Image ${index + 1}`}
                layout="fill"
                objectFit="fill"
              />
            </div>
          ))}
        </div>
        <div className="w-1/4 h-full relative border-2 border-white rounded-md shadow-lg p-2 bg-white hidden lg:block">
          <Image
            src="https://theme.hstatic.net/200000420363/1001292105/14/banner_right_5.jpg?v=188"
            alt="Banner Image"
            layout="fill"
            objectFit="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
