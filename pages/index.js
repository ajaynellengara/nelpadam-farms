import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OpeningScene from "@/components/home/HeroSlider";
import SocialProof from "@/components/home/SocialProof";
import FarmHistory from "@/components/home/FarmHistory";
import ProductsSlider from "@/components/home/ProductsSlider";
import BenefitsZigZag from "@/components/home/BenefitsZigZag";
import EnquirySection from "@/components/home/EnquirySection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nelpadam Farms — Pre-Order Govindan's Harvest. Support Rural Kerala.</title>
        <meta
          name="description"
          content="Govindan Nair farms pepper, tamarind and turmeric on his family's 3.5-acre plot in Kottarakkara, Kerala. Pre-order his harvest directly — no middlemen, fair pay to the farmer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Nelpadam Farms — Pre-Order Govindan's Harvest" />
        <meta property="og:description" content="Farm-direct spices from rural Kerala. Pre-order the harvest. Support the farmer." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        {/* The Opening — full-viewport dark intro with field illustration */}
        <OpeningScene />

        {/* Impact strip — numbers that matter */}
        <SocialProof />

        {/* Chapter 01 — Meet Govindan Nair */}
        <FarmHistory />

        {/* Chapter 02 — What's Growing / Pre-Order Crops */}
        <ProductsSlider />

        {/* Chapter 03 — Your Impact + middleman chart */}
        <BenefitsZigZag />

        {/* Chapter 04 — Pre-Order Form */}
        <EnquirySection />
      </main>

      <Footer />
    </>
  );
}
