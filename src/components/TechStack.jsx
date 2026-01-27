import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostman,
  SiFramer,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiLaravel,
  SiJavascript,
  SiNetlify,
  SiVite,
  SiGreensock,
  SiCodeigniter
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { LiaCss3Alt } from "react-icons/lia";

gsap.registerPlugin(ScrollTrigger);

const TechIcon = ({ icon: Icon, name, color = "purple" }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    const element = iconRef.current;

    // Hover 3D tilt effect with GSAP
    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 5;
      const rotateY = (centerX - x) / 5;

      gsap.to(element, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const glowColor = color === "amber" ? "hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" : "hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]";

  return (
    <div
      ref={iconRef}
      className="tech-icons flex flex-col items-center gap-2 group cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      <Icon className={`text-5xl md:text-6xl text-gray-400 group-hover:text-${color}-400 transition-all duration-300 ${glowColor}`} />
      <span className="text-xs font-mono text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest mt-2">
        {name}
      </span>
    </div>
  );
};

const SkillCategory = ({ title, skills, color = "purple", delay = 0 }) => {
  const categoryRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        iconsRef.current,
        {
          opacity: 0,
          scale: 0.5,
          y: 30,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: categoryRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, categoryRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={categoryRef} className="mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="mb-8"
      >
        <h2 className={`text-2xl md:text-3xl font-bold text-${color}-400 mb-2`}>
          {title}
        </h2>
        <div className={`w-16 h-1 bg-${color}-400 rounded-full`}></div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            ref={(el) => (iconsRef.current[index] = el)}
          >
            <TechIcon icon={skill.icon} name={skill.name} color={color} />
          </div>
        ))}
      </div>
    </div>
  );
};

const frontendSkills = [
  { icon: FaHtml5, name: "HTML5" },
  { icon: LiaCss3Alt, name: "CSS3" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: FaReact, name: "React.js" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: FaBootstrap, name: "Bootstrap" },
  { icon: SiFramer, name: "Framer Motion" },
  { icon: SiGreensock, name: "GSAP" },
];

const backendSkills = [
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: FaPhp, name: "PHP" },
  { icon: SiLaravel, name: "Laravel" },
  { icon: SiCodeigniter, name: "CodeIgniter" },
  { icon: FaPython, name: "Python" },
];

const databaseSkills = [
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: FaDatabase, name: "SQL" },
];

const toolsSkills = [
  { icon: FaGitAlt, name: "Git" },
  { icon: FaGithub, name: "GitHub" },
  { icon: TbBrandVscode, name: "VS Code" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiVite, name: "Vite" },
  { icon: SiNetlify, name: "Netlify" },
];

function TechStack() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div ref={headerRef} className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-black mb-4">
          Professional <span className="text-gradient">Skillset</span>
        </h1>
        <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
      </div>

      <SkillCategory title="Frontend" skills={frontendSkills} color="purple" delay={0} />
      <SkillCategory title="Backend" skills={backendSkills} color="blue" delay={0.1} />
      <SkillCategory title="Databases" skills={databaseSkills} color="green" delay={0.2} />
      <SkillCategory title="Tools & Platforms" skills={toolsSkills} color="amber" delay={0.3} />
    </section>
  );
}

export default TechStack;
