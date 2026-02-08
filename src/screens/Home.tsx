import Me from '../assets/me.jpg';

function Home() {
  return (
    <div>
      <nav>
        <ul className="w-full flex items-center justify-end gap-3 sm:gap-6 lg:gap-10 pt-2 sm:pt-4 lg:pt-[30px] pr-4 sm:pr-8 lg:pr-[80px] h-auto lg:h-[50px]">
          <li>
            <a
              className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100"
              href="/"
            >
              Home
            </a>
          </li>
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
              href="#/blog/post"
            >
              Blog
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
              className="text-[#247BA0] hover:text-[#195970] transition-colors duration-200 delay-100"
              href="https://acquisory.com/Services/Cyber-Consulting"
              rel="noopener noreferrer"
              target="_blank"
            >
              Acquisory Cyber Consulting.
            </a>{' '}
            I enjoy breaking and making things.
          </span>
          <br />
          <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
            Previously at{' '}
            <a
              className="text-[#247BA0] hover:text-[#195970] transition-colors duration-200 delay-100"
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

      <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#247BA0] p-[80px]">
        Here are some of my projects:
      </span>

      <section className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 p-[40px]">
        <a
          href="https://github.com/ayushmanchhabra/taskforce"
          target="_blank"
          rel="noopener noreferrer"
          className="group h-48 flex flex-col items-start justify-center rounded-xl bg-gray-75 p-10 shadow-lg transition hover:shadow-xl hover:bg-gray-100 hover:scale-[1.02] cursor-pointer"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
            TaskForce
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </h2>
          <p className="text-gray-700">
            A tool for security automation and instrumentation using JavaScript (Node.js).
          </p>
        </a>

        <a
          href="https://github.com/ayushmanchhabra/sftp"
          target="_blank"
          rel="noopener noreferrer"
          className="group h-48 flex flex-col items-start justify-center rounded-xl bg-gray-75 p-10 shadow-lg transition hover:shadow-xl hover:bg-gray-100 hover:scale-[1.02] cursor-pointer"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
            SFTP
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </h2>
          <p className="text-gray-700">
            A file upload service which demonstrates secure coding practices, useful for security research, training and awareness.
          </p>
        </a>


        <a
          href="https://github.com/nwutils/nw-builder"
          target="_blank"
          rel="noopener noreferrer"
          className="group h-48 flex flex-col items-start justify-center rounded-xl bg-gray-75 p-10 shadow-lg transition hover:shadow-xl hover:bg-gray-100 hover:scale-[1.02] cursor-pointer"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
            NW.js Utils
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </h2>
          <p className="text-gray-700">
            Maintainer of nw-builder and other NW.js related open-source projects.
          </p>
        </a>
      </section>
    </div>
  );
}

export default Home;
