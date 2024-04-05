import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/avi.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, delay: delay },
	},
});
const Hero = () => {
	return (
		<div className=" border-b border-slate-700 pb-5 text-gray-400 ">
			{/* content section */}
			<div className="flex flex-wrap bg-neutral-950 bg-opacity-50">
				{/* content left section */}
				<div className="w-full  lg:w-1/2 mt-10 ">
					{/* name framer-motion */}
					<div className="flex flex-col items-center justify-center  ">
						<motion.h1
							variants={container(0)}
							initial="hidden"
							animate="visible"
							className="text-4xl  font-thin tracking-tight pb-4 lg:pb-16 py-2 lg:text-7xl"
						>
							Avinash Palakurthi
						</motion.h1>
						<motion.span
							variants={container(0.4)}
							initial="hidden"
							animate="visible"
							className="bg-gradient-to-r from-red-700 via-orange-500 to-blue-600 bg-clip-text text-transparent text-4xl font-semibold tracking-tighter py-4"
						>
							FrontEnd Developer
						</motion.span>
						<motion.p
							variants={container(0.7)}
							initial="hidden"
							animate="visible"
							className="mx-2 lg:my-5  text-justify py-4 text-md "
						>
							{HERO_CONTENT}
						</motion.p>
					</div>
				</div>
				{/* content right section */}

				<div className="w-full lg:w-1/2 lg:p-8 ">
					<div className="flex items-center justify-center">
						<motion.img
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 1 }}
							src={profilePic}
							alt=""
							className="size-3/4 rounded-3xl "
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
