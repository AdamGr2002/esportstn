import { AnimatedBackground } from '@/components/ui/animated-background';

export function AnimatedTabsHover() {
  const TABS = ['Home', 'Tournaments', 'Stats', 'About', 'Resources'];

  return (
    <div className='flex flex-row space-x-4'>
      <AnimatedBackground
        defaultValue={TABS[0]}
        className='rounded-lg bg-zinc-100 dark:bg-zinc-900'
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.3,
        }}
        enableHover
      >
        {TABS.map((tab, index) => (
          <button
            key={index}
            data-id={tab}
            type='button'
            className='px-2 py-0.5 text-red-600 transition-colors duration-300 hover:text-red-600 dark:text-red-600 dark:hover:text-red-600'
          >
            {tab}
          </button>
        ))}
      </AnimatedBackground>
    </div>
  );
}
