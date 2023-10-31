import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Family',
		hash: '#family',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: 'Sjóvá',
		location: 'Reykjavík, Ísland',
		description: 'Ég vann sem bakendaforritari',
		icon: React.createElement(CgWorkAlt),
		date: '2018 - 2023',
	},
	{
		title: 'Háskólinn í Reykjavík',
		location: 'Reykjavík, Ísland',
		description:
			'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
		icon: React.createElement(LuGraduationCap),
		date: '2015-2018',
	},
	{
		title: 'Margmiðlunarskólinn',
		location: 'Reykjavík',
		description:
			'Ég kláraði 2. ára diploma nám í Margmiðlunarskólanum, þar lærði ég meðal annars á öll helstu margmiðlunarforrit eins og t.d.',
		icon: React.createElement(LuGraduationCap),
		date: '2009-2011',
	},
] as const;

export const projectsData = [
	{
		title: 'CorpComment',
		description:
			'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
		tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
		imageUrl: corpcommentImg,
	},
	{
		title: 'rmtDev',
		description:
			'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
		tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
		imageUrl: rmtdevImg,
	},
	{
		title: 'Word Analytics',
		description:
			'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
		tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'Git',
	'Tailwind',
	// 'Prisma',
	// 'MongoDB',
	'Redux',
	// 'GraphQL',
	// 'Apollo',
	// 'Express',
	// 'PostgreSQL',
	'Python',
	// 'Django',
	'Framer Motion',
] as const;
