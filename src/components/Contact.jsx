import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { MdOutlineAlternateEmail } from "react-icons/md";
const Contact = () => {
	return (
		<div
			className=" border-b border-slate-700 pb-5 text-gray-400 
    bg-gradient-to-r from-slate-900 via-teal-950 to-gray-900 py-5 "
		>
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1 }}
				h2
				className="my-10 lg:my-20 text-4xl text-center lg:text-6xl "
			>
				GET IN TOUCH
			</motion.h2>
			<div className="text-center tracking-tighter">
				<motion.p
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 1 }}
					className="my-4"
				>
					{CONTACT.address}
				</motion.p>
				<motion.p
					whileInView={{ opacity: 2, x: 0 }}
					initial={{ opacity: 1, x: 100 }}
					transition={{ duration: 1 }}
					className="my-4"
				>
					{CONTACT.phoneNo}
				</motion.p>

				<div className="flex items-center justify-center gap-2 ">
					<MdOutlineAlternateEmail size={20} className="mt-2" />
					<motion.a
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 1 }}
						href="mailto:palakurthiavinash.career@gmail.com"
						className="border-b"
						target="_blank"
						rel="noopener noreferrer"
					>
						{CONTACT.email}
					</motion.a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
