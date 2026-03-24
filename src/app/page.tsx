import { Navbar } from "@/components/navbar";

const sections = [
  { id: "about", title: "About" },
  { id: "work", title: "Selected Work" },
  { id: "experience", title: "Experience" },
  { id: "teaching", title: "Teaching & Leadership" },
  { id: "contact", title: "Contact" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center space-y-4">
          <p
            className="text-sm font-medium tracking-wide uppercase"
            style={{ color: "var(--accent)" }}
          >
            Senior Fullstack Mobile Engineer
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Mustapha
            <br />
            Abdulmujeeb
          </h1>
          <p
            className="text-lg max-w-md mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Building fintech products used by 100K+ users
          </p>
        </div>
      </section>

      {/* Placeholder sections */}
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="section-padding"
        >
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