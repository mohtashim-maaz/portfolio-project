import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Type from "../components/Type";
import myimage from "../assets/myimage.jpg";
import Particle from "../components/Particle";
import Hero3D from "../components/Hero3D";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="relative overflow-hidden bg-transparent">
      <Particle />
      <Hero3D />

      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity, scale }}
        className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative z-10"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Hero Text */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
              Available for New Projects
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black tracking-tight">
              Hi There! <span className="inline-block origin-bottom-right hover:animate-bounce cursor-default">👋🏻</span>
              <br />
              <span className="text-gradient">I'm MOHTASHIM MAAZ</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-mono text-gray-400 h-12">
              <Type />
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start pt-4">
              <button className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                View My Work
              </button>
              <button className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white font-bold transition-all">
                About Me
              </button>
            </motion.div>
          </div>

          {/* Hero Image with Parallax */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center order-1 lg:order-2"
            style={{
              x: mousePosition.x * -1,
              y: mousePosition.y * -1,
            }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={myimage}
                alt="Mohtashim Maaz"
                className="relative h-[40vh] md:h-[60vh] rounded-2xl object-cover shadow-2xl brightness-90 group-hover:brightness-100 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="py-24 px-6 relative bg-white/[0.02] z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-black text-amber-300 mb-4 sticky top-24">
                About <span className="text-white">Me</span>
              </h2>
            </div>
            <div className="md:col-span-2 space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-400">
                Let Me Introduce Myself
              </h3>
              <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                <p>
                  I'm a passionate <span className="text-white font-bold underline decoration-purple-500 decoration-2">MERN Stack Developer</span> dedicated to building immersive digital experiences.
                </p>
                <p>
                  My expertise spans the entire frontend landscape, from HTML/CSS and JavaScript to advanced frameworks like <span className="text-amber-300">React JS</span>. I love blending technical logic with creative design.
                </p>
                <p>
                  While I'm continuously expanding my backend knowledge with Node.js, Express, and MongoDB, my focus remains on delivering high-performance, visually stunning applications that push the boundaries of the web.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
