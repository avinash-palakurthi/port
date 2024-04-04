import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
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
					<FaGithub className="lg:size-8 size-6" />
					<FaLinkedin className="lg:size-8 size-6" />
					<FaTwitter className="lg:size-8 size-6" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
