/**
 * @copyright 2026 Hardik Garg
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 * Hooks
 */
import { useState } from 'react';

/**
 * Components
 */
import { Button } from '@/components/ui/Button';
import { ContactDialog } from '@/components/ContactDialog';

/**
 * Assets
 */
import { SparkleIcon, MailIcon, GithubIcon, LinkedinIcon } from 'lucide-react';

export const Header = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <header className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
      <motion.div
        className='space-y-2'
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <div className='flex items-center gap-2 text-primary font-semibold tracking-tight'>
          <SparkleIcon size={20} />

          <p>Software Developer</p>
        </div>

        <h1 className='text-5xl font-bold tracking-tight text-on-background md:text-7xl'>
          Hardik <span className='text-primary'>Garg</span>
        </h1>

        <p className='text-xl text-on-surface-variant max-w-xl leading-relaxed'>
          passionate about building cool projects,
  solving problems, and continuously improving skills on data strucutres and algorithms. 
        </p>
      </motion.div>

      <motion.div
        className='flex gap-4'
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <Button onClick={() => setDialogOpen(true)}>
          <MailIcon />
          Let's Connect
        </Button>

        <ContactDialog
          open={dialogOpen}
          onOpen={() => setDialogOpen(false)}
        />

        <div className='flex gap-2'>
          <Button
            variant='secondary'
            size='icon'
            asChild
          >
            <a
              href='https://github.com/hardikg15'
              target='_blank'
              aria-label="Github"
            >
              <GithubIcon />
            </a>
          </Button>

          <Button
            variant='secondary'
            size='icon'
            asChild
          >
            <a
              href='https://www.linkedin.com/in/hardikg15/'
              target='_blank'
              aria-label="Linkedin"
            >
              <LinkedinIcon />
            </a>
          </Button>
        </div>
      </motion.div>
    </header>
  );
};
