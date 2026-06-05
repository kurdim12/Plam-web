import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Comparison } from "@/components/sections/comparison";
import { Traction } from "@/components/sections/traction";
import { Roadmap } from "@/components/sections/roadmap";
import { SdgBand } from "@/components/sections/sdg-band";
import { Team } from "@/components/sections/team";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <HowItWorks />
        <Comparison />
        <Traction />
        <Roadmap />
        <SdgBand />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
