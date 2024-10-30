// pages/Page.js
import Banner from "@/components/HomePage/Banner";
import FlashSale from "@/components/HomePage/FlashSale";
import ContentBanner from "@/components/HomePage/ContentBanner";

import CategoryHot from "@/components/HomePage/CategoryHot";

const Page = () => {
  return (
    <div>
      <Banner />
      <FlashSale />
      <ContentBanner />
      <CategoryHot />
    </div>
  );
};

export default Page;
