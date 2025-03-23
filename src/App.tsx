import React from "react"

interface LinkProps {
  href: string,
  children: string | React.JSX.Element | React.JSX.Element[],
}

function Link({
  href,
  children,
}: LinkProps): React.JSX.Element {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">{children}</a>
  );
}

function App() {

  return (
    <div style={{ margin: 10 }}>
      <h1 data-testid='about'>AYUSHMAN CHHABRA</h1>
      <section style={{ paddingTop: 20 }}>
        <h3>Me in 10 seconds</h3><br />
        <p>Economics student turned software developer turned security analyst.</p>
        <p>Interested in literature, music and fitness.</p>
        <p>Occassionally touches grass.</p>
      </section>

      <section style={{ paddingTop: 20 }}>
        <h3 data-testid='projects'>Projects</h3><br />
        <p><Link href="https://asyncawake.studio">Async Awake</Link>: A technology blog about coding, software engineering, cyber security and more.</p>
        <p><Link href="https://github.com/ayushmanchhabra/vsx">vsx</Link>: A library to write vanilla JavaScript applications using JSX syntax without virtual DOM or Proxy magic.</p>
        <p><Link href="https://github.com/ayushmanchhabra/surf">Surf</Link>: A browser with the goal of inversion of control.</p>
      </section>

      <section style={{ paddingTop: 20 }}>
        <h3 data-testid='books'>Books</h3><br />
        <p><Link href="https://www.goodreads.com/book/show/40121378-atomic-habits">Atomic Habits</Link>: Changed the way I function at Link fundamental level.</p>
        <p><Link href="https://goodreads.com/book/show/34536488-principles">Principles</Link>: Taught me how to think clearly.</p>
        <p><Link href="https://www.goodreads.com/book/show/23848190-extreme-ownership">Extreme Ownership</Link>: Taught me why and how to take ownership of tasks.</p>
      </section>

      <section style={{ paddingTop: 20 }}>
        <h3 data-testid='videos'>Videos</h3><br />
        <p><Link href="https://www.youtube.com/watch?v=PUv66718DII">Inventing on Principle | Bret Victor</Link></p>
        <p><Link href="https://www.youtube.com/watch?v=zKd_kxcxGbo&t=256s">Mediocrity is Rising | Harkirat Singh</Link></p>
      </section>

      <section style={{ paddingTop: 20 }}>
        <h3 data-testid='blogs'>Blogs</h3><br />
        <p><Link href="https://sive.rs/">Derek Sivers</Link></p>
        <p><Link href="https://patrickcollison.com/">Patrick Colinson</Link></p>
        <p><Link href="https://paulgraham.com/">Paul Graham</Link></p>
      </section>
    </div>
  )
}

export default App
