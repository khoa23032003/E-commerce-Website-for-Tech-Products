import Footer from "@/components/(User)/Footer/Footer";
import Navbar from "@/components/(User)/Navbar";
import React, { ReactNode } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </header>
      <main className="flex-grow container mx-auto pt-16 pb-16 ">
        {/* Đệm cho header và footer */}
        {children}
      </main>
      <footer className="bg-gray-100 p-5 text-gray-800">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
