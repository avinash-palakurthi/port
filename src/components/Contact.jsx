import { CONTACT } from "../constants";
import { motion } from "framer-motion";
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
				<motion.a
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 1 }}
					href="#"
					className="border-b"
				>
					{CONTACT.email}
				</motion.a>
			</div>
		</div>
	);
};

export default Contact;
