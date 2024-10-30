// components/HomePage/ContentBanner.js
import Image from "next/image";

const ContentBanner = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full pt-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="w-full h-[30vh] bg-blue-400 rounded-lg shadow-lg overflow-hidden relative"
        >
          <Image
            src={`https://file.hstatic.net/200000722513/file/banner_web_slider_800x400_laptop_gaming_wukong_d33e1e6762764ec799820bfcc5814047.jpg`}
            alt={`Banner Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      ))}
    </div>
  );
};

export default ContentBanner;
