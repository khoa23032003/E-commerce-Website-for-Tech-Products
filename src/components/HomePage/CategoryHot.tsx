// components/HomePage/LaptopHot.js
import CardComponent from "@/components/(User)/(Category)/CardComponent";

const CategoryHot = () => {
  return (
    <div className="bg-gray-100 pt-2 pr-3 my-4">
      <div className="flex items-center justify-between">
        <div className="bg-red-600 text-white font-bold py-2 px-4 rounded-md rounded-r-full">
          LAPTOP VĂN PHÒNG
        </div>
        <div className="flex space-x-3">
          {["MSI", "Lenovo", "Dell", "HP", "Acer", "Asus", "Xem tất cả"].map(
            (brand, index) => (
              <button
                key={index}
                className="border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100"
              >
                Laptop {brand}
              </button>
            )
          )}
        </div>
      </div>

      {/* PRODUCT
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-2 md:gap-2 lg:gap-2 p-5">
        {[...Array(4)].map((_, index) => (
          <CardComponent key={index} />
        ))}
      </div> */}
    </div>
  );
};

export default CategoryHot;
