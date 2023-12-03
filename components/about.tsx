'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import portfolioImage from '@/public/Halli_portfolio_image.jpg';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';
export default function About() {
	const { ref } = useSectionInView('About');

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<div className="flex items-center justify-center mb-10">
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
							className="h-[13rem] w-[13rem] rounded-full
                    object-cover border-[0.15rem] border-white shadow-2xl"
						/>
					</motion.div>
				</div>
			</div>
			<SectionHeading>Haraldur Ingi Shoshan</SectionHeading>
			<p className="mb-3">
				Eftir að ég útskrifaðist úr tölvunarfræði við{' '}
				<span className="font-medium">Háskóla Reykjavíkur</span> 2018 fór ég að
				vinna í <span className="italic">Sjóvá</span>. Þar var ég aðallega í
				.Net bakenda forritun. Ég hef einnig mikinn áhuga á{' '}
				<span className="font-medium">framendaforritun</span>. Ég hef undanfarið
				verið að kynna mér{' '}
				<span className="font-bold">React, Next.js, Node.js</span>, einnig hef
				ég kynnt mér
				<span className="font-bold"> Typescript</span>. Mér finnst gaman að
				kynna mér nýja hluti og læra.
			</p>

			<p>
				<span className="italic">Þegar ég er ekki að forrita</span>, hef ég mjög
				gaman af tölvuleikjum, fótbolta, tónlist og spila ég á bassa í
				þungarokkshljómsveit. Ég hef einnig mjög gaman af því að teikna. Mér
				finnst einnig yndislegt að eyða tíma meö fjölskyldunni minni.
			</p>
		</motion.section>
	);
}
