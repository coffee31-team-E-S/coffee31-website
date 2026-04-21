import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LocationHours from "@/components/LocationHours";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <LocationHours />
      </main>
      <Footer />
    </>
  );
}
