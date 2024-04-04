import { RiReactjsLine, RiJavascriptLine } from "react-icons/ri";
import {
	TbBrandNextjs,
	TbBrandTypescript,
	TbBrandTailwind,
	TbHtml,
	TbBrandCss3,
} from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});
const Technologies = () => {
	return (
		<div className=" border-b border-slate-700 pb-24 text-gray-400 ">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.5 }}
				className="my-20 text-center text-4xl lg:text-6xl"
			>
				Technologies
			</motion.h2>
			{/* icons section  */}
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1.5 }}
				className="flex flex-wrap justify-center items-center gap-4 "
			>
				{/* icons 1 */}
				<motion.div
					variants={iconVariants(2.5)}
					initial="initial"
					animate="animate"
					className=" rounded-2xl border-1 border-slate-700 p-4 shadow-md shadow-slate-500"
				>
					<RiReactjsLine className="text-4xl lg:text-7xl text-teal-800" />
				</motion.div>
				{/* icons  2*/}
				<motion.div
					variants={iconVariants(9)}
					initial="initial"
					animate="animate"
					className=" rounded-2xl border-1 border-slate-700 p-4 shadow-md shadow-slate-500"
				>
					<RiJavascriptLine className="text-4xl lg:text-7xl text-amber-500" />
				</motion.div>
				{/* icons 3 */}
				<motion.div
					variants={iconVariants(6)}
					initial="initial"
					animate="animate"
					className=" rounded-2xl border-1 border-slate-700 p-4 shadow-md shadow-slate-500"
				>
					<TbBrandNextjs className="text-4xl lg:text-7xl text-zinc-600" />
				</motion.div>
				{/* icons 4 */}
				<motion.div
					variants={iconVariants(2)}
					initial="initial"
					animate="animate"
					className=" rounded-2xl border-1 border-slate-700 p-4 shadow-md shadow-slate-500"
				>
					<TbBrandTypescript className="text-4xl lg:text-7xl text-blue-500 " />
				</motion.div>
				{/* icons 5 */}
				<motion.div
					variants={iconVariants(5)}
					initial="initial"
					animate="animate"
					className=" rounded-2xl border-1 border-slate-700 p-4 shadow-md shadow-slate-500"
				>
					<TbBrandTailwind className="text-4xl lg:text-7xl text-cyan-400 " />
				</motion.div>
				{/* icons 6 */}
				<motion.div
					variants={iconVariants(3)}
					initial="initial"
					animate="animate"
					className=" rounded-2xl border-1 border-slate-700 p-4 shadow-md shadow-slate-500"
				>
					<TbHtml className="text-4xl lg:text-7xl text-orange-500" />
				</motion.div>
				{/* icons 7 */}
				<motion.div
					variants={iconVariants(5.5)}
					initial="initial"
					animate="animate"
					className=" rounded-2xl border-1  border-slate-700 p-4 shadow-md shadow-slate-500"
				>
					<TbBrandCss3 className="text-4xl lg:text-7xl text-red-700 " />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Technologies;
