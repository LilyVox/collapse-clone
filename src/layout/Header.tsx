import ThemeToggle from "./ThemeToggle";
export default function Header() {
  const linkTheme = "text-primary-text hover:text-accent transition-colors";

  return (
    <header className='backdrop-blur sticky top-0 z-50 border-b bg-primary/60 border-accent-soft/60'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 p-10'>
          <div className='flex items-center gap-4 p-10'>
            <a href='/' className='flex items-center gap-3 no-underline'>
              <div className='text-slate-900 dark:text-slate-100 p-10'>
                <h1 className='text-lg font-semibold tracking-tight'>Lilith Luce</h1>
              </div>
            </a>
          </div>

          {/* Desktop nav */}
          <nav className='flex items-center gap-6'>
            <a
              href='#about'
              className='text-primary-text hover:text-accent transition-colors font-medium'>
              About
            </a>
            <a
              href='#projects'
              className='text-primary-text hover:text-accent transition-colors font-medium'>
              Projects
            </a>
            {/* <a
              href='/contact'
              className={`${linkTheme} font-medium`}>
              Contact
            </a> */}

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
