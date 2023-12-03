import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import drapaImg from '@/public/drapaWeb.jpg';

export const links = [
	// {
	// 	name: 'Home',
	// 	nameIs: 'Heim',
	// 	hash: '#home',
	// },
	{
		name: 'About',
		nameIs: 'Um mig',
		hash: '#about',
	},
	{
		name: 'Projects',
		nameIs: 'Verkefni',
		hash: '#projects',
	},
	{
		name: 'Skills',
		nameIs: 'Hæfileikar',
		hash: '#skills',
	},
	{
		name: 'Experience',
		nameIs: 'Reynsla',
		hash: '#experience',
	},
	{
		name: 'Family',
		nameIs: 'Fjölskylda',
		hash: '#family',
	},
	{
		name: 'Contact',
		nameIs: 'Hafa samband',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: 'Sjóvá',
		location: 'Reykjavík, Ísland',
		description:
			'Ég byrjaði að vinna í Sjóvá í júlí 2018, strax eftir að ég útskrifaðist úr HR. Vinnan mín fólst í því að sinna innra kerfi starfsmanna og var ég þá aðallega að vinna í bakenda.',
		icon: React.createElement(CgWorkAlt),
		images: [],
		date: '2018 - 2023',
	},
	{
		title: 'Háskólinn í Reykjavík',
		location: 'Reykjavík, Ísland',
		description:
			'Byrjaði árið 2015 og útskrifaðist árið 2018 með BS gráðu í tölvunarfræði. Þar lærði ég m.a. um forritun, SQL forritun, vefhönnun og margt fleira.',
		icon: React.createElement(LuGraduationCap),
		images: [
			{ name: 'Skírteini', imagePath: '/HR_certificate.jpg' },
			{ name: 'Einkunnir', imagePath: '/HR_grades.jpg' },
		],
		date: '2015-2018',
	},
	{
		title: 'Margmiðlunarskólinn',
		location: 'Reykjavík',
		description:
			'Ég kláraði 2. ára diploma nám í Margmiðlunarskólanum, þar lærði ég meðal annars á öll helstu margmiðlunarforrit eins og t.d.' +
			' Photoshop, After effects, Premiere pro, Illustrator, 3ds Max og margt fleira.',
		icon: React.createElement(LuGraduationCap),
		images: [],
		date: '2009-2011',
	},
] as const;

export const projectsData = [
	{
		title: 'Drápa ',
		description:
			'Bjó til heimasíður fyrir hljómsveitina mína. Notaði React og Next.js til að búa til síðurnar. Notaði Tailwind til að stíla.',
		tags: ['React', 'Next.js', 'Tailwind'],
		url: 'http://drapamusic.com',
		displayUrl: 'drapamusic.com',
		imageUrl: drapaImg,
	},
] as const;

export const skillsData = [
	{ name: '.Net', skillLevel: 4 },
	{ name: 'C#', skillLevel: 4 },
	{ name: 'SQL', skillLevel: 3 },
	{ name: 'HTML', skillLevel: 4 },
	{ name: 'CSS', skillLevel: 4 },
	{ name: 'React', skillLevel: 3 },
	{ name: 'Next.js', skillLevel: 3 },
	{ name: 'Redux', skillLevel: 2 },
	{ name: 'Framer Motion', skillLevel: 2 },
	{ name: 'Tailwind', skillLevel: 3 },
	{ name: 'Angular 2+', skillLevel: 3 },
	{ name: 'JavaScript', skillLevel: 4 },
	{ name: 'TypeScript', skillLevel: 3 },
	{ name: 'Node.js', skillLevel: 3 },
	{ name: 'Git', skillLevel: 4 },
] as const;
