'use client';

import Image from 'next/image';
import React from 'react';
import portfolioImage from '@/public/Halli_portfolio_image.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section.context';

export default function Intro() {
	const { ref } = useSectionInView('Home', 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<section
			ref={ref}
			id="home"
			className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
		>
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							duration: 0.2,
						}}
					>
						<Image
							src={portfolioImage}
							alt="image_portfolio"
							className="h-36 w-36 rounded-full
                    object-cover border-[0.15rem] border-white shadow-2xl"
						/>
					</motion.div>
				</div>
			</div>

			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]
            sm:text-2xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Halló, Ég heiti Haraldur.</span> Ég er{' '}
				<span className="font-bold">forritari</span> með{' '}
				<span className="font-bold">5 ára</span> reynslu. Mér finnst mjög gaman
				að forrita <span className="italic">framenda og bakenda</span>.
			</motion.h1>

			<motion.div
				className="flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				<Link
					href="/#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex justify-center items-center gap-2 rounded-full
                    outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
					onClick={() => {
						setActiveSection('Contact');
						setTimeOfLastClick(Date.now());
					}}
				>
					Hafðu samband hérna{' '}
					<BsArrowRight className="opacity-70 group-hover:translate-x-2 transition " />
				</Link>

				<a
					className="group bg-white px-7 py-3 flex justify-center items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer
                    borderBlack dark:bg-white/10"
					href="/CV-Halli.pdf"
					download
				>
					Ferilskrá{' '}
					<HiDownload className="opacity-60 group-hover:translate-x-2 transition " />
				</a>
				{/* <a
					className="group bg-white px-7 py-3 flex justify-center items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer
                    borderBlack dark:bg-white/10"
					href="/Kynningarbréf.pdf"
					download
				>
					Kynningarbréf{' '}
					<HiDownload className="opacity-60 group-hover:translate-x-2 transition " />
				</a> */}

				<a
					className="bg-white text-gray-700 p-4 flex justify-center items-center gap-2 rounded-full hover:text-gray-950 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer
                    borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://www.linkedin.com/in/haraldur-ingi-shoshan-14929a117/"
					target="_blank"
				>
					<BsLinkedin />
				</a>

				{/* <a
					className="bg-white text-gray-700 p-4 flex justify-center items-center gap-2 rounded-full text-[1.35rem] hover:text-gray-950 focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition cursor-pointer
                    borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://github.com"
					target="_blank"
				>
					<FaGithubSquare />
				</a> */}
			</motion.div>
		</section>
	);
}
