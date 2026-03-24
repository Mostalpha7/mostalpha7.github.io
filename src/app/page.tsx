import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";

const placeholders = [
  { id: "work", title: "Selected Work" },
  { id: "experience", title: "Experience" },
  { id: "teaching", title: "Teaching & Leadership" },
  { id: "contact", title: "Contact" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      {placeholders.map((section) => (
        <section key={section.id} id={section.id} className="section-padding">
          <div className="max-w-5xl mx-auto px-6">
            <div
              className="min-h-[60vh] flex items-center justify-center rounded-2xl"
              style={{
                backgroundColor: "var(--surface)",
                border: "0.5px solid var(--border)",
              }}
            >
              <h2
                className="text-3xl font-semibold"
                style={{ color: "var(--text-faint)" }}
              >
                {section.title}
              </h2>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}