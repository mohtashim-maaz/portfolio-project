import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaBootstrap } from "react-icons/fa";
import { LiaCss3Alt } from "react-icons/lia";
import { SiTailwindcss, SiPostman, SiPycharm, SiPandas, SiRedux } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";

const TechIcon = ({ icon: Icon, name }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotateY: 15,
        rotateX: -15,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="tech-icons flex flex-col items-center gap-2 group"
    >
      <Icon className="text-5xl md:text-6xl text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
      <span className="text-xs font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest mt-2">{name}</span>
    </motion.div>
  );
};

const skills = [
  { icon: DiJavascript1, name: "JavaScript" },
  { icon: DiNodejs, name: "Node.js" },
  { icon: DiReact, name: "React" },
  { icon: DiMongodb, name: "MongoDB" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: DiGit, name: "Git" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: LiaCss3Alt, name: "CSS3" },
  { icon: FaBootstrap, name: "Bootstrap" },
];

const tools = [
  { icon: TbBrandVscode, name: "VS Code" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiRedux, name: "Redux" },
  { icon: IoLogoFirebase, name: "Firebase" },
  { icon: DiPython, name: "Python" },
  { icon: SiPandas, name: "Pandas" },
];

function TechStack() {
  return (
    <section className="py-20 flex flex-col items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-black mb-4">
          Professional <span className="text-gradient">Skillset</span>
        </h1>
        <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TechIcon icon={skill.icon} name={skill.name} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-24 mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Favorite <span className="text-amber-300">Tools</span>
        </h1>
        <div className="w-16 h-1 bg-amber-300 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TechIcon icon={tool.icon} name={tool.name} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
