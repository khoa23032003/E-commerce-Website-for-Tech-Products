// pages/Page.js
import Banner from "@/components/HomePage/Banner";
import FlashSale from "@/components/HomePage/FlashSale";
import ContentBanner from "@/components/HomePage/ContentBanner";

import CategoryHot from "@/components/HomePage/CategoryHot";
import { ModeToggle } from "@/components/(User)/Setting/DarkModeToggle";

const Page = () => {
  return (
    <div>
      <p className="mt-4 text-primary-light dark:text-primary-dark">
        This is an example of using Dark/Light mode with ShadCN UI and custom
        styles.
      </p>
      <ModeToggle />
      <Banner />
      <FlashSale />
      <ContentBanner />
      <CategoryHot />
    </div>
  );
};

export default Page;
