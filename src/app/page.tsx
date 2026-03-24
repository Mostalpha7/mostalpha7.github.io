import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Experience } from "@/components/sections/experience";
import { Teaching } from "@/components/sections/teaching";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Teaching />
      <Contact />
    </>
  );
}