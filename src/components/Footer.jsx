import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const MagneticSocial = ({ icon: Icon, href, color }) => {
    const ref = useRef(null);

    return (
        <motion.a
            ref={ref}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 400, damping: 10 } }}
            className={`p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 transition-colors duration-300 hover:text-white hover:border-${color}/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]`}
        >
            <Icon className="text-2xl" />
        </motion.a>
    );
};

const Footer = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <footer className="relative mt-20 pt-20 pb-12 px-6 overflow-hidden">
            {/* Top Border Glow */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent shadow-[0_0_20px_rgba(168,85,247,0.3)]"></div>

            {/* Animated Background Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl -z-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.1),transparent_50%)] -z-10"></div>

            <motion.div
                ref={containerRef}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10"
            >
                {/* Brand/Name */}
                <motion.div variants={itemVariants} className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-gradient tracking-tighter">
                        Mohtashim Maaz
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed">
                        Building elegant web experiences with precision and passion.
                    </p>
                </motion.div>

                {/* Social Icons */}
                <motion.div variants={itemVariants} className="flex gap-6">
                    <MagneticSocial
                        icon={FaGithub}
                        href="https://github.com/mohtashim21"
                        color="purple-500"
                    />
                    <MagneticSocial
                        icon={FaLinkedin}
                        href="https://www.linkedin.com/in/mohtashim-maaz-7043911b6/"
                        color="amber-400"
                    />
                    <MagneticSocial
                        icon={FaEnvelope}
                        href="mailto:mohteshim3276@gmail.com"
                        color="purple-400"
                    />
                </motion.div>

                {/* Divider */}
                <motion.div
                    variants={itemVariants}
                    className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                ></motion.div>

                {/* Copyright */}
                <motion.div
                    variants={itemVariants}
                    className="text-gray-500 text-sm font-mono tracking-widest uppercase"
                >
                    &copy; {new Date().getFullYear()} &mdash; Designed & Built by Mm.
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;
