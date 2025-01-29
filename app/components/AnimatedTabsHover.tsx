import { AnimatedBackground } from '@/components/ui/animated-background';
import Link from 'next/link'

export function AnimatedTabsHover() {
  const TABS = [
    { name: 'Home', path: '/' },
    { name: 'Tournaments', path: '/tournaments' },
    { name: 'News', path: '/news' },
    { name: 'Teams', path: '/teams' },
    { name: 'Forums', path: '/forums' },
  ];

  return (
    <div className='flex flex-row space-x-4'>
      <AnimatedBackground
        defaultValue={TABS[0].name}
        className='rounded-lg bg-zinc-100 dark:bg-zinc-900'
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.3,
        }}
        enableHover
      >
        {TABS.map((tab, index) => (
          <Link
            key={index}
            href={tab.path}
            data-id={tab.name}
            className='px-2 py-0.5 text-red-600 transition-colors duration-300 hover:text-red-600 dark:text-red-600 dark:hover:text-red-600'
          >
            {tab.name}
          </Link>
        ))}
      </AnimatedBackground>
    </div>
  );
}
