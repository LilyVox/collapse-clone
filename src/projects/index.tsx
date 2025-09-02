import ProjectCard, { type Project } from './ProjectVM';
import OPScreenie from '../assets/screenshots/OnePiecedleScreenie.png';
import FCScreenie from '../assets/screenshots/FlashcardManager.png';
import PomoScreenie from '../assets/screenshots/PomodoroTimer.png';
// import  from '../assets/screenshots/PomodoroTimer.png';
export default function Projects() {
  // const card = 'm-4 p-4 backdrop-blur dark:bg-primary-dark/60 rounded-md max-w-2xl';
  const OnePieceDle: Project = {
    id: 0,
    title: 'OnePieceDle',
    description:
      'A character guessing game for One Piece, it takes data from a public facing wiki and transforms it into a fun daily game.',
    image: OPScreenie,
    tags: ['Typescript', 'Node.js', 'React.js', 'Tailwindcss'],
    links: [
      {
        label: 'Live Link',
        href: 'https://one-piecedle-ultimate.vercel.app',
        external: true,
      },
      {
        label: 'Github Link',
        href: 'https://github.com/LilyVox/OnePiecedle-Ultimate',
        external: true,
      },
    ],
  };
  const FlashCards: Project = {
    id: 0,
    title: 'FlashCards',
    description:
      'A flash-card management app with CRUD routes for decks and cards in decks, plus a study mode.',
    image: FCScreenie,
    tags: ['React.js', 'Bootstrap 4'],
    links: [
      {
        label: 'Live Link',
        href: 'https://devils-flashcards.vercel.app/',
        external: true,
      },
      {
        label: 'Github Link',
        href: 'https://github.com/LilyVox/DevilsFlashcards',
        external: true,
      },
    ],
  };
  const Pomodoro: Project = {
    id: 0,
    title: 'Pomodoro Timer',
    description:
      'A pomodoro timer with rest, harder than it looks!',
    image: PomoScreenie,
    tags: ['React.js', 'Bootstrap 4'],
    links: [
      {
        label: 'Live Link',
        href: 'https://project-pomodoro-timer-qualified-1-brown.vercel.app/',
        external: true,
      },
      {
        label: 'Github Link',
        href: 'https://github.com/LilyVox/Pomo-Timer',
        external: true,
      },
    ],
  };
  return (
    <section id='projects' className='align-baseline flex p-[2em] justify-center items-center flex-wrap'>
      <ProjectCard project={OnePieceDle} />
      <ProjectCard project={FlashCards} />
      <ProjectCard project={Pomodoro} />
    </section>
  );
}
