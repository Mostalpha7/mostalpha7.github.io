export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1
          className="text-5xl font-bold"
          style={{ color: "var(--text)" }}
        >
          Mustapha Abdulmujeeb
        </h1>
        <p
          className="text-xl"
          style={{ color: "var(--text-muted)" }}
        >
          Senior Fullstack Mobile Engineer
        </p>
        <div className="flex gap-3 justify-center">
          <span
            className="px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "var(--accent-subtle)",
              color: "var(--accent-text)",
            }}
          >
            Flutter
          </span>
          <span
            className="px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "var(--accent-subtle)",
              color: "var(--accent-text)",
            }}
          >
            Node.js
          </span>
          <span
            className="px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "var(--accent-subtle)",
              color: "var(--accent-text)",
            }}
          >
            PostgreSQL
          </span>
        </div>
        <p
          className="text-sm"
          style={{ color: "var(--text-faint)" }}
        >
          Toggle dark mode → open DevTools → run:{" "}
          <code
            className="px-2 py-0.5 rounded text-xs"
            style={{
              backgroundColor: "var(--surface-2)",
              color: "var(--accent-text)",
            }}
          >
            document.documentElement.classList.toggle(&apos;dark&apos;)
          </code>
        </p>
      </div>
    </main>
  );
}