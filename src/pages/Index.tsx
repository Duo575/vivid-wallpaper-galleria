
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WallpaperGrid from "@/components/WallpaperGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WallpaperGrid />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
