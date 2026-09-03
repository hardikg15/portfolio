/**
 * @copyright 2026 Hardik Garg
 * @license Apache-2.0
 */

/**
 * Assets
 */
import {
  GraduationCapIcon,
  AwardIcon,
  GamepadIcon,
} from 'lucide-react';
import {
  React,
  NextJs,
  TypeScript,
  NodeJs,
  Docker,
  PostgreSQL,
} from '@/assets/TechStackIcons';

/**
 * Types
 */
import type { Project } from '@/types';

export const PROFILE_TAGS = [
  'React 19',
  'TypeScript',
  'Node.js',
  'AWS',
  'GraphQL',
];

export const PROJECTS: Project[] = [
  {
    Icon: GamepadIcon,
    bg: '#D0E4FF',
    title: 'Rock Paper Scissors Game',
    desc: 'An interactive Rock Paper Scissors game with dynamic UI and user interaction handling.',
    techStacks: ['HTML', 'Node.js', 'CSS'],
    projectUrl: 'https://rockpaperscissors-v10.netlify.app/',
  },
  
];

export const EXPERIENCES = [
  {
    company: 'Maharaja Agrasen Institute of Technology',
    position: 'Student',
    joinDate: '2024',
    resignDate: '',
    achievements: [
       'Building a strong foundation in computer science',
      'Learning Data Structures and Algorithms',
    ],
    skills: ['C++', 'DSA', 'Problem Solving'],
  },
];

export const EDUCATIONS = [
  {
    title: 'B.Tech Information Technology',
    academy: 'Maharaja Agrasen Institute of Technology',
    year: '2024 - 2028',
    certificate: 'Undergraduate Program',
    Icon: GraduationCapIcon,
    skills: ['DSA', 'Web Development', 'Problem Solving'],
  },
  {
    title: 'AWS Academy Graduate',
    academy: 'Amazon Web Services',
    year: '2026',
    certificate: 'Machine Learning Foundations',
    Icon: AwardIcon,
    skills: ['Machine Learning', 'Deep Learning', 'AI Fundamentals'],
  },
  {
    title: 'AWS Academy Graduate',
    academy: 'Amazon Web Services',
    year: '2026',
    certificate: 'Genrative AI Foundations',
    Icon: AwardIcon,
    skills: ['Generative AI', 'Large Language Models', 'Prompt Engineering'],
  },
];

export const TECH_STACKS = [
  {
    name: 'React',
    Icon: React,
  },
  {
    name: 'Next.js',
    Icon: NextJs,
  },
  {
    name: 'TypeScript',
    Icon: TypeScript,
  },
  {
    name: 'NodeJs',
    Icon: NodeJs,
  },
  {
    name: 'Docker',
    Icon: Docker,
  },
  {
    name: 'PostgreSQL',
    Icon: PostgreSQL,
  },
];

export const FOOTER_LINKS = [
  {
    url: '#',
    label: 'Resume',
  },
  {
    url: '#',
    label: 'LinkedIn',
  },
  {
    url: '#',
    label: 'Github',
  },
];
