import LocationHours from "@/components/LocationHours";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <LocationHours />
      <main>
        <Hero />
        <div className="flex items-center justify-center py-24">
          <p className="text-[#8b5c2a] font-serif text-2xl">האתר בבנייה</p>
        </div>
      </main>
      <Footer />
    </>
  );
}