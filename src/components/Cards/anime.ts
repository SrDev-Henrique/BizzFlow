import { cubicBezier } from "framer-motion";

export const fadeUpVariants = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: cubicBezier(0.215, 0.61, 0.355, 1),
		},
	},
};

export const clipPathDownVariants = {
    hidden: {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)",
        opacity: 0,
    },
    visible: {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
        transition: {
            duration: 1,
            ease: cubicBezier(0.215, 0.61, 0.355, 1),
        },
    },
};