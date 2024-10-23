// src/app/users/layout.tsx
import Footer from "@/components/(User)/Footer/Footer";
import Navbar from "@/components/(User)/Navbar";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-10 ">
        <Navbar />
      </header>
      <main className="flex-grow pt-16 pb-16 overflow-auto p=0 m-0">
        {" "}
        {/* Đệm cho header và footer */}
        {children}
      </main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
