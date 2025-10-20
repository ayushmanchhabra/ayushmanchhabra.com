import Me from './me.jpg';

function App() {
  return (
    <div>
      <nav>
        <ul className="h-[50px] w-full flex items-center justify-end gap-10 pt-[30px] pr-[80px]">
          <li>
            <a
              className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100"
              href="https://github.com/ayushmanchhabra"
              rel="noopener noreferrer"
              target="_blank"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100"
              href="https://www.linkedin.com/in/ayushmanchhabra/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100"
              href="mailto:ayushmxn@outlook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Intro Section */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center mt-10">
        {/* Text Section */}
        <div className="flex flex-col items-start justify-center p-[40px] lg:p-[80px] order-1 lg:order-none">
          <span className="text-[24px] sm:text-[28px] lg:text-[36px] font-semibold text-gray-800 leading-snug">
            I'm Ayushman, a VAPT Associate at {' '}
            <a
              className="text-[#ed0d21]"
              href="https://acquisory.com/Services/Cyber-Consulting"
              rel="noopener noreferrer"
              target="_blank"
            >
              Acquisory Cyber Consulting.
            </a>{' '}
            I enjoy making and breaking things.
          </span>
          <br />
          <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
            Previously at{' '}
            <a
              className="text-[#ed0d21]"
              href="https://www.constanthealth.ca/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Constant Health
            </a>
          </span>
        </div>

        {/* Image Section */}
        <div className="h-full w-full flex flex-col items-center sm:items-center justify-center p-[40px] lg:p-[80px] order-2 lg:order-none">
          <img
            className="border-2 w-[70%] sm:w-[60%] md:w-[50%] lg:w-auto"
            src={Me}
            alt="Me"
          />
        </div>
      </section>

      {/* Projects Sections */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 p-[40px]">
        <div className="h-48 flex flex-col items-start justify-center rounded-xl bg-gray-75 p-10 shadow-lg">
          <a
            className="text-2xl font-semibold text-gray-800"
            href="https://asyncawake.studio"
            rel="noopener noreferrer"
            target="_blank"
          >
            Async Awake
          </a>
          <br />
          A technology blog about coding, software engineering, cyber security and more.
        </div>

        <div className="h-48 flex flex-col items-start justify-center rounded-xl bg-gray-75 p-10 shadow-lg">
          <a
            className="text-2xl font-semibold text-gray-800"
            href="https://github.com/ayushmanchhabra/localghost"
            rel="noopener noreferrer"
            target="_blank"
          >
            Localghost
          </a>
          <br />
          A tool for security automation and instrumentation using JavaScript (Node.js).
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 p-[40px]">
        <div className="h-48 flex flex-col items-start justify-center rounded-xl bg-gray-75 p-10 shadow-lg">
          <a
            className="text-2xl font-semibold text-gray-800"
            href="https://github.com/nwutils/nw-builder"
            rel="noopener noreferrer"
            target="_blank"
          >
            NW.js Utils
          </a>
          <br />
          Maintainer of nw-builder and other NW.js related open-source projects.
        </div>

        <div className="h-48 flex flex-col items-start justify-center rounded-xl bg-gray-75 p-10 shadow-lg">
          <a className="text-2xl font-semibold text-gray-800" href="#" rel="noopener noreferrer" target="_blank">
            Untitled
          </a>
          <br />
          Coming soon...
        </div>
      </section>
    </div>
  );
}

export default App;
