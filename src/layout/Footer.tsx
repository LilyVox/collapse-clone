export default function Footer() {
  const linkTheme = "red-hat-text-450 text-primary-text hover:text-main transition-colors";
  return (
    <footer className='w-full mt-12 border-t-2 backdrop-blur bg-secondary border-border '>
      <div className='max-w-6xl mx-auto px-6 py-10'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <div>
            <h3 className='text-lg font-semibold montserrat-700 text-primary-text'>
              Lilith Luce
            </h3>
            <p className='mt-1 text-sm red-hat-text-700 text-primary-text'>
              Full-Stack Software Developer
            </p>
          </div>

          <nav aria-label='Footer navigation' className='flex flex-wrap items-center gap-4'>
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
              href='https://github.com/LilyVox'
              target='_blank'
              rel='noreferrer'
              className={`${linkTheme}`}>
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/lilith-luce/'
              target='_blank'
              rel='noreferrer'
              className={`${linkTheme}`}>
              LinkedIn
            </a>
          </nav>
        </div>

        <div className='mt-2 border-t border-detail pt-2'>
          <p className='text-center text-sm text-primary-text'>
            ©{new Date().getFullYear()} Lilith Luce. All rights reserved.
            Under construction.
          </p>
        </div>
      </div>
    </footer>
  );
}
