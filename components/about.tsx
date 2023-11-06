'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

import { useSectionInView } from '@/lib/hooks';

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
			<SectionHeading>Um mig</SectionHeading>
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
