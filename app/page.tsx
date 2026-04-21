import LocationHours from "@/components/LocationHours";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <LocationHours />
      </main>
    </>
  );
}
