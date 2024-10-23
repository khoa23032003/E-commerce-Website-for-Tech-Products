// src/app/users/layout.tsx
import Footer from "@/components/(User)/Footer";
import Navbar from "@/components/(User)/Navbar";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen">
      <header>
        <Navbar />
      </header>
      <main className=" overflow-scroll">
        {children}
        </main>
      <Footer />
    </div>
  );
};

export default Layout;
