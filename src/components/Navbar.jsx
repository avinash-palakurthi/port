import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiSemanticuireact } from "react-icons/si";

const Navbar = () => {
	return (
		<nav className=" text-white py-3 mb-20  w-full ">
			<div className="flex justify-between items-center lg:mx-10">
				<div className="mx-2 font-bold bg-gradient-to-r from-red-700 via-orange-500 to-blue-600 bg-clip-text flex items-center justify-center gap-2">
					<span className="text-orange-400 ">
						<SiSemanticuireact className="font-bold size-8" />
					</span>
					<p className="text-xl md:text-xl lg:text-3xl text-gray-400  text-transparent  ">
						A.P
					</p>
				</div>
				<div className="flex items-center md:gap-10 gap-4  text-gray-400 mx-2">
					<a
						href="https://github.com/avinash-palakurthi"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub className="lg:size-8 size-6" />
					</a>

					<a
						href="https://www.linkedin.com/in/avinashpalakurthi0721/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin className="lg:size-8 size-6" />
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
