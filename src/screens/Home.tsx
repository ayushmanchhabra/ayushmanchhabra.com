import { useEffect, useState } from "react";

import Me from "../assets/me.jpg";

const roles = [
  "security researcher",
  "penetration tester",
  "software developer",
];

const skills = [
  "vulnerability assessment",
  "penetration testing",
  "exploit development",
  "source code review",
  "reverse engineering",
  "malware analysis",
  "web security",
  "mobile security",
  "network programming",
  "system architecture design",
  "legacy system modernization",
];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
              href="#/blog/post"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100"
              href="mailto:ayushman.chhabra@alumni.utoronto.ca"
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
            I'm Ayushman, a{" "}
            <span className="inline-flex h-[1.375em] overflow-hidden align-bottom">
              <span
                className="flex flex-col transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${index * 1.375}em)` }}
              >
                {roles.map((role) => (
                  <span
                    key={role}
                    className="h-[1.375em] flex items-center text-[#247BA0]"
                  >
                    {role}.
                  </span>
                ))}
              </span>
            </span>
            <br />
            <i>I enjoy breaking and making things.</i>
            <br />
            <span className="text-[14px] sm:text-[18px] lg:text-[24px] font-semibold text-gray-800 leading-snug"></span>
          </span>

          <br />

          <p className="mt-4 text-gray-700 text-base sm:text-lg">
            Open to collaborate and work on security research, red team engagements or software related projects —{" "}
            <a
              href="mailto:ayushman.chhabra@alumni.utoronto.ca"
              className="text-[#247BA0] font-semibold hover:underline"
            >
              get in touch
            </a>
            .
          </p>
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

      {/* Skills Marquee */}
      <section className="w-full overflow-hidden py-6 border-y border-gray-200">
        <div className="flex w-max animate-marquee gap-12">
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={i}
              className="flex items-center gap-12 text-lg sm:text-xl font-semibold text-gray-700 whitespace-nowrap"
            >
              {skill}
              <span className="text-[#247BA0]">•</span>
            </span>
          ))}
        </div>
      </section>

      <br /><br />

      <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#247BA0] p-[80px]">
        Here are some of my projects:
      </span>

      <section className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 p-[40px]">
        <a
          href="https://github.com/ayushmanchhabra/enumx"
          target="_blank"
          rel="noopener noreferrer"
          className="group h-48 flex flex-col items-start justify-center rounded-xl bg-gray-75 p-10 shadow-lg transition hover:shadow-xl hover:bg-gray-100 hover:scale-[1.02] cursor-pointer"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
            killchain
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </h2>
          <p className="text-gray-700">
            Fast low-level TCP/SYN host discovery tool and port scanner built from scratch in C using raw sockets.
          </p>
        </a>

        <a
          href="https://verify.asyncawake.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="group h-48 flex flex-col items-start justify-center rounded-xl bg-gray-75 p-10 shadow-lg transition hover:shadow-xl hover:bg-gray-100 hover:scale-[1.02] cursor-pointer"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
            Tmp Mail
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </h2>
          <p className="text-gray-700">
            Disposable email identifier to reduce spam, fake signups and prevent platform abuse.
          </p>
        </a>

        <a
          href="https://github.com/nwutils/nw-builder"
          target="_blank"
          rel="noopener noreferrer"
          className="group h-48 flex flex-col items-start justify-center rounded-xl bg-gray-75 p-10 shadow-lg transition hover:shadow-xl hover:bg-gray-100 hover:scale-[1.02] cursor-pointer"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
            nw-builder
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </h2>
          <p className="text-gray-700">
            Maintainer of nw-builder and other NW.js related tooling.
          </p>
        </a>

        <a
          href="https://github.com/ayushmanchhabra/autofrida"
          target="_blank"
          rel="noopener noreferrer"
          className="group h-48 flex flex-col items-start justify-center rounded-xl bg-gray-75 p-10 shadow-lg transition hover:shadow-xl hover:bg-gray-100 hover:scale-[1.02] cursor-pointer"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
            autofrida
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </h2>
          <p className="text-gray-700">
            Automate Frida installation on Android (virtual) devices. Jump right into pentesting without worrying about setup and configuration.
          </p>
        </a>
      </section>
    </div>
  );
}

export default Home;
