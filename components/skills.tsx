'use client';
import React from 'react';

import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

function renderSkillLevels(skillLevel: number) {
	const content = [];
	for (let i = 0; i < 5; i++) {
		if (skillLevel > i) {
			content.push(
				// return your JSX for each skill level here
				<div
					key={i}
					className="bg-black/20 border-black/20 h-2 w-2 rounded-lg border dark:border-gray-200/30 dark:bg-gray-200/30"
				></div>,
			);
		} else {
			content.push(
				<div
					key={i}
					className="border-black/20 h-2 w-2  rounded-lg border dark:border-gray-200/30"
				></div>,
			);
		}
	}
	return content;
}

export default function Skills() {
	const { ref } = useSectionInView('Skills', 1);

	return (
		<section
			ref={ref}
			id="skills"
			className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
		>
			<SectionHeading>Færni</SectionHeading>
			<ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
				{skillsData.map((skill, index) => (
					<motion.li
						className="bg-white borderBlack rounded-xl px-2 py-2 dark:bg-white/10 dark:text-white/80"
						key={index}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: false,
						}}
						custom={index}
					>
						{/* {skill} */}
						<div className="flex flex-col justify-between">
							<div className="">{skill.name}</div>
							{/* <div className="h-5 flex flex-row gap-1 justify-center items-center">
								{renderSkillLevels(skill.skillLevel)}
							</div> */}
						</div>
					</motion.li>
				))}
			</ul>
		</section>
	);
}
