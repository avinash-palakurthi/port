import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
	return (
		<div className=" border-b border-slate-700 pb-5 text-gray-400 ">
			<h2 className="my-20 text-4xl lg:text-6xl text-center">
				About
				<span className="text-gray-700"> Me</span>
			</h2>
			{/* about section content */}
			<div className="flex flex-wrap   bg-gradient-to-tr from-gray-950 via-neutral-900 to-slate-950 bg-opacity-25 text-slate-300 py-5 ">
				{/* About image */}
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.5 }}
					className="w-full lg:w-1/2 lg:p-8"
				>
					<div className="flex items-center justify-center">
						<img src={aboutImg} alt="about" className="rounded-3xl size-3/4" />
					</div>
				</motion.div>
				{/*About  test  */}
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 100 }}
					transition={{ duration: 1.3 }}
					className="w-full flex  lg:w-1/2  "
				>
					<div className="flex  justify-center  items-center ">
						<p className="max-w-xl lg:py-6 lg:leading-7  text-center p-5 lg:text-md ">
							{ABOUT_TEXT}
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
