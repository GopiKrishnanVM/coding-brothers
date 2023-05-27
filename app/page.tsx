import { Hero } from "@/components/home-page/Hero";
import { Newsletter } from "@/components/home-page/Newsletter";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Newsletter />
      </main>
    </>
  );
}
