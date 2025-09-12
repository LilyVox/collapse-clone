import ThemeToggle from "./ThemeToggle";
export default function Header() {
  const linkTheme = "red-hat-text-450 text-primary-text hover:text-main transition-colors";

  return (
    <header className='backdrop-blur sticky top-0 z-50 border-b-2 bg-secondary border-border'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 p-2'>
          <div className='flex items-center gap-4 p-2'>
            <a href='/' className='flex items-center gap-3 no-underline'>
              <div className='text-primary-text p-2'>
                <h1 className='text-2xl montserrat-700 tracking-tight'>Lilith Luce</h1>
              </div>
            </a>
          </div>

          {/* Desktop nav */}
          <nav className='flex items-center gap-6'>
            <a
              href='#about'
              className={`${linkTheme}`}>
              About
            </a>
            <a
              href='#projects'
              className={`${linkTheme}`}>
              Projects
            </a>

            <a
              href='https://www.linkedin.com/in/lilith-luce/'
              target='_blank'
              rel='noreferrer'
              className={`${linkTheme}`}
              aria-label='LinkedIn'>
              LinkedIn
            </a>
            <a
              href='https://github.com/LilyVox'
              target='_blank'
              rel='noreferrer'
              className={`${linkTheme}`}
              aria-label='github'>
              Github
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
