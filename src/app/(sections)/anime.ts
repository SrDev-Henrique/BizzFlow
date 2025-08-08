// todo Hero-Section

import { cubicBezier } from "framer-motion";

export const fadeInVariants = {
	hidden: {
		opacity: 0,
	},
	visible: (index: number) => ({
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: cubicBezier(0.215, 0.61, 0.355, 1),
			delay: index * 0.1,
		},
	}),
};

export const fadeUpVariants = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: (delay: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: cubicBezier(0.215, 0.61, 0.355, 1),
			delay: delay,
		},
	}),
};

export const reviewContainerVariants = {
	hidden: {
		scaleX: 0.6,
		opacity: 0,
	},
	visible: {
		scaleX: 1,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: cubicBezier(0.215, 0.61, 0.355, 1),
			delay: 0.4,
		},
	},
};

export const reviewImagesVariants = {
	hidden: {
		opacity: 0,
		scale: 0.5,
	},
	visible: (index: number) => ({
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: cubicBezier(0.215, 0.61, 0.355, 1),
			delay: 0.4 + index * 0.1,
		},
	}),
};
