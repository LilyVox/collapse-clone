import Projects from '../projects';

export default function Home() {
  const card = 'm-4 p-4 backdrop-blur bg-primary/60 rounded-md text-primary-text max-w-2xl';
  const AboutCards = ({ text }: { text: string }) => {
    return (
      <div className={`${card}`}>
        <p>{text}</p>
      </div>
    );
  };
  return (
    <section>
      <div>
        <h2 className='backdrop-blur bg-primary/60 rounded-md text-primary-text mt-4 p-4 text-primary-text text-xl font-semibold w-fit'>
          About me:
        </h2>
      </div>
      <div id='about' className='flex flex-col items-center p-[2em]'>
        <AboutCards text='A full-stack developer with a focus on front-end engineering and modern web technologies. Proficient in TypeScript, React, Node.js, Express, PostgreSQL, Tailwindcss, and the MERN stack with additional experience in PHP and PowerShell automation.' />
        <p className={`${card} sm:indent-20`}>
          I build applications that are clean, scalable, and user-focused. My background across both
          front-end and back-end development enables me to deliver solutions that balance
          performance with usability.
        </p>
        <p className={`${card} sm:indent-20`}>
          Seeking opportunities as a Front-End Developer or Software Engineer where I can contribute
          technical expertise, attention to detail, critical thinking and a drive to grow with a
          collaborative team.
        </p>
      </div>
      <div>
        <h2 className='backdrop-blur bg-primary/60 rounded-md text-primary-text m-4 p-4 text-primary-text text-xl font-semibold w-fit'>
          What I've been working on lately:
        </h2>
      </div>
      <Projects />
    </section>
  );
}
