import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StoryLayout from "@/components/stories/StoryLayout";
import KanyammaHero from "@/components/stories/KanyammaHero";
import KanyammaProducts from "@/components/stories/KanyammaProducts";
import KanyammaJourney from "@/components/stories/KanyammaJourney";
import KanyammaEnquiry from "@/components/stories/KanyammaEnquiry";
import { kanyamma, kanyammaChapters } from "@/data/products";

export default function KanyammaPage() {
  return (
    <>
      <Navbar />
      <main>
        <KanyammaHero />
        <StoryLayout
          id="kanyamma-story"
          farmer={kanyamma}
          chapters={kanyammaChapters}
          imageSrc="/images/kanyamma.png"
          chapterLabel="Chapter 01"
          heading="Meet Kanyamma"
          storyIntro="Not everyone who sustains tradition is a farmer. Kanyamma keeps the taste of Kanyakumari alive — one sweet at a time, from her home kitchen to your table."
          themeName="kanyamma"
          infoBox={{
            lines: [
              "With Nelpadam's support, Kanyamma can reach customers beyond her village. Every order is a chance to share her craft and support her home business.",
              "Homemade · No preservatives · Traditional Kanyakumari recipes",
            ],
          }}
        />
        <KanyammaProducts />
        <KanyammaJourney />
        <KanyammaEnquiry />
      </main>
      <Footer />
    </>
  );
}
