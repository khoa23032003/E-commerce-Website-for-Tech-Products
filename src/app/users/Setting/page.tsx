"use client";
import Head from "next/head";
import DarkModeToggle from "@/components/(User)/Setting/DarkModeToggle";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Head>
        <title>Setting Page</title>
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 ">Cài đặt</h1>
        <DarkModeToggle />
      </main>
    </div>
  );
};

export default SettingsPage;
