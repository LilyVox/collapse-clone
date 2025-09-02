export default function Footer() {
  return (
    <footer className='mt-12 border-t backdrop-blur bg-primary/60 border-accent/60'>
      <div className='max-w-6xl mx-auto px-6 py-10'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
          <div>
            <h3 className='text-lg font-semibold text-primary-text'>
              Lilith Luce
            </h3>
            <p className='mt-1 text-sm text-primary-text'>
              Full-Stack Software Developer
            </p>
          </div>

          <nav aria-label='Footer navigation' className='flex flex-wrap items-center gap-4'>
            <a
              href='#about'
              className='text-sm text-primary-text hover:text-accent transition-colors'>
              About
            </a>
            <a
              href='#projects'
              className='text-sm text-primary-text hover:text-accent transition-colors'>
              Projects
            </a>
            {/* <a
              href='/contact'
              className='text-sm text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors'>
              Contact
            </a> */}
            <a
              href='https://github.com/LilyVox'
              target='_blank'
              rel='noreferrer'
              className='text-sm text-primary-text hover:text-accent transition-colors'>
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/lilith-luce/'
              target='_blank'
              rel='noreferrer'
              className='text-sm text-primary-text hover:text-accent transition-colors'>
              LinkedIn
            </a>
          </nav>
        </div>

        <div className='mt-8 border-t border-slate-100 dark:border-slate-800 pt-6'>
          <p className='text-center text-sm text-slate-500 dark:text-slate-400'>
            ©{new Date().getFullYear()} Lilith Luce. All rights reserved.
            Under construction.
          </p>
        </div>
      </div>
    </footer>
  );
}
