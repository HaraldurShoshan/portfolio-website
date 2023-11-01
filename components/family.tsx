'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';
import { motion } from 'framer-motion';
import mikaelHinrikImage from '@/public/mikaelHinrik.jpg';
import fam3 from '@/public/fam3.jpg';
import mikaelHinrik from '@/public/mikael_hinrik.jpg';
import mikaelHinrik2 from '@/public/mikaelhinrik2.jpg';

export default function Family() {
	const { ref } = useSectionInView('Family', 1);

	return (
		<section
			ref={ref}
			id="family"
			className="scroll-mt-28 max-w-[45rem] mb-28 sm:mb-40"
		>
			<SectionHeading>My Family</SectionHeading>
			<div className="flex flex-wrap gap-2 justify-center">
				<motion.div
					className="relative overflow-hidden rounded-md shadow-xl min-h-[31rem] min-w-[20rem]
					sm:hover:scale-[1.5] hover:z-10 transition-all"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ ease: 'easeInOut' }}
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
						className="relative overflow-hidden rounded-md shadow-xl max-h-[10rem] min-h-[10rem] min-w-[20rem] max-w-[20rem]
						sm:hover:scale-[2] hover:z-10 transition-all"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ ease: 'easeInOut' }}
					>
						<Image
							src={fam3}
							alt="fam2"
							style={{ maxWidth: 'none', height: 'initial' }}
							className="absolute -top-3 w-full h-full"
						></Image>
					</motion.div>
					<motion.div
						className="relative overflow-hidden rounded-md shadow-xl max-h-[10rem] min-h-[10rem] min-w-[20rem] max-w-[20rem]
						sm:hover:scale-[2] hover:z-10 transition-all"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ ease: 'easeInOut' }}
					>
						<Image
							src={mikaelHinrik}
							alt="mikaelHinrik"
							style={{ maxWidth: 'none', height: 'initial' }}
							className="absolute -top-5 w-full h-full"
						></Image>
					</motion.div>
					<motion.div
						className="relative overflow-hidden rounded-md shadow-xl max-h-[10rem] min-h-[10rem] min-w-[20rem] max-w-[20rem]
						sm:hover:scale-[2] transition-all"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ ease: 'easeInOut' }}
					>
						<Image
							src={mikaelHinrik2}
							alt="mikaelHinrik2"
							style={{ maxWidth: 'none', height: 'initial' }}
							className="absolute -top-5 w-full h-full"
						></Image>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
