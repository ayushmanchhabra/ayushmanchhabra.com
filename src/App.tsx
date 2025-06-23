import Me from './me.jpg';

const timeline = [
  {
    title: 'Certfied Ethical Hacker v13',
    description: 'EC Council (May 2025 - valid till May 2028)',
  },
  {
    title: 'Penetration Tester',
    description: 'Acquisory Cyber Consulting LLP (April 2024 - Present)',
  },
  {
    title: 'Bachelor of Science',
    description: 'University of Toronto (graduated June 2024)',
  },
  {
    title: 'Software Developer',
    description: 'Constant Health (June 2021 - September 2022)',
  },
];

interface TimelineProps {
  details: {
    title: string;
    description: string;
  }[];
}

function Timeline({
  details
}: TimelineProps) {
  return (
    <div className="relative border-l-4 border-gray-300 ml-4 pl-6 space-y-12 ml-[100px]">
      {details.map((item, idx) => (
        <div key={idx}>
          <div style={{ top: `${idx * 92}px` }} className="absolute -left-[9px] w-4 h-4 bg-black rounded-full border-2 border-white shadow"></div>
          <h3 className="text-lg font-semibold text-black">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function App() {

  return (
    <div>
      <nav>
        <ul className="h-[50px] w-full flex items-center justify-end gap-10 pt-[30px] pr-[80px]">
          <li>
            <a className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100" href="/home">Work</a>
          </li>
          <li>
            <a className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100" href="https://github.com/ayushmanchhabra" rel="noopener noreferrer" target="_blank">Projects</a>
          </li>
          <li>
            <a className="text-black font-semibold hover:text-gray-500 transition-colors duration-200 delay-100" href="https://www.linkedin.com/in/ayushmanchhabra/" rel="noopener noreferrer" target="_blank">Resume</a>
          </li>
        </ul>
      </nav>
      <section className="h-full pl-20 pt-15 grid grid-cols-[2fr_1fr] items-center flex justify-start items-center">
        <div className="flex flex-col items-start justify-center">
          <span className="text-4xl font-semibold text-gray-800">
            Economics student <br /> turned software developer <br /> turned penetration tester.
          </span>
          <br /><br />
          <span>
            Interested in old movies, vehicle number plates and good food.
          </span>
        </div>

        <div className="max-sm:hidden h-full w-full flex flex-col items-center justify-center pr-[80px]">
          <img className="border-2" src={Me} alt="Me" />
        </div>

      </section>

      <br /><br />

      <section>
        <Timeline details={timeline} />
      </section>
    </div>
  )
}

export default App
