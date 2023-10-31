'use client';
import React, { Fragment } from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';
import { motion } from 'framer-motion';
import mikaelHinrikImage from '@/public/mikaelHinrik.jpg';
import fam2 from '@/public/fam2.jpg';

const pic1 = {
	initial: {
		opacity: 0,
		y: 0,
		x: -500,
	},
	animate: {
		opacity: 1,
		y: 0,
		x: 0,
		transition: {
			delay: 0,
			duration: 0.3,
		},
	},
};

const pic2 = {
	initial: {
		opacity: 0,
		y: 0,
		x: -800,
	},
	animate: {
		opacity: 1,
		y: 0,
		x: 0,
		transition: {
			delay: 0.275,
			duration: 0.3,
		},
	},
};

const pic3 = {
	initial: {
		opacity: 0,
		y: 0,
		x: 1000,
	},
	animate: {
		opacity: 1,
		y: 0,
		x: 0,
		transition: {
			delay: 0.375,
			duration: 0.3,
		},
	},
};

export default function Family() {
	const { ref } = useSectionInView('Family', 0.8);

	return (
		<section
			ref={ref}
			id="family"
			className="scroll-mt-28 max-w-[45rem] mb-28 sm:mb-40"
		>
			<SectionHeading>My Family</SectionHeading>
			<div className="flex flex-wrap gap-2 justify-center">
				<motion.div
					className="relative overflow-hidden border-black/[0.3] rounded-md border min-h-[31rem] min-w-[20rem]"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.25, ease: 'easeInOut' }}
				>
					<Image
						src={mikaelHinrikImage}
						alt="mikaelHinrik"
						style={{ maxWidth: 'none', height: 'initial' }}
						className="absolute w-[30rem] -right-[8.75rem] -top-[13rem] 
                        "
					></Image>
				</motion.div>
				<div className="flex flex-col gap-2">
					<motion.div
						className="relative overflow-hidden border-black/[0.3] rounded-md border max-h-[10rem] min-h-[10rem] min-w-[20rem] max-w-[20rem] "
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.5, ease: 'easeInOut' }}
					>
						<Image
							src={fam2}
							alt="fam2"
							style={{ maxWidth: 'none', height: 'initial' }}
							className="absolute -top-3 w-full h-full"
						></Image>
					</motion.div>
					<motion.div
						className="bg-white/5 border-black/[0.3] rounded-md border max-h-[10rem] min-h-[10rem] min-w-[20rem] max-w-[20rem]"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.75, ease: 'easeInOut' }}
					></motion.div>
					<motion.div
						className="bg-white/5 border-black/[0.3] rounded-md border max-h-[10rem] min-h-[10rem] min-w-[20rem] max-w-[20rem]"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 1, ease: 'easeInOut' }}
					></motion.div>
				</div>
			</div>
		</section>
	);
}
