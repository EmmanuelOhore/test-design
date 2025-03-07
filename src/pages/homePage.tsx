import HeroSection from "../components/hero/hero";
import LogoList from "../ui/logolist";
import NavBar from "../components/NavBar";
import PlatformSection from "../components/platform/platformSection";
import ReasonSections from "../components/reasonsSection/reasonSections";
import FeaturesSection from "../components/features/featuresSection";
import MapSection from "../components/mapSection/mapSecttion";
import TestimonialSection from "../components/TestimonialSection/textimonialSection";
import Footer from "../components/footer/footer";
const Home = () => {
  return (
    <main className="flex flex-col lg:gap-8">
      <NavBar />
      <HeroSection />
      <LogoList />
      <PlatformSection />
      <ReasonSections />
      <FeaturesSection />
      <MapSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
};

export default Home;
