import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
const Projects = () => {
	return (
		<div className=" border-b border-slate-700 pb-5 text-gray-400 ">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1 }}
				className="my-10 lg:my-20 text-4xl text-center lg:text-7xl "
			>
				Projects
			</motion.h2>
			<div className="flex flex-wrap flex-col gap-3 items-center w-full justify-center">
				{PROJECTS.map((project, index) => (
					<div
						key={index}
						className="lg:mb-8 lg:justify-center flex gap-20 flex-wrap mt-5 items-center justify-center bg-gradient-to-r from-slate-900 via-zinc-900 to-gray-900 p-7 bg-opacity-100"
					>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className="w-full flex items-center lg:w-1/4"
						>
							<img
								src={project.image}
								alt="proj"
								className="size-52 lg:size-10/12 lg:mb-6 rounded-xl mx-auto"
							/>
						</motion.div>
						{/* project description */}
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1 }}
							className="w-full max-w-xl lg:w-3/4 flex flex-col flex-shrink-0 "
						>
							<h5 className=" font-semibold text-center text-xl lg:mb-5">
								{project.title}
							</h5>
							<p className="my-4 text-justify lg:mb-6 text-lg font-extralight">
								{project.description}
							</p>
							{/* technologies */}
							<div className="flex lg:mt-5 gap-2 flex-1 lg:gap-5 items-center justify-center my-2">
								{project.technologies.map((tech, index) => (
									<span
										key={index}
										className="bg-gradient-to-r from-red-500 via-orange-500 to-blue-600 bg-clip-text text-transparent font-semibold text-lg "
									>
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
