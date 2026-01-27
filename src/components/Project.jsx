import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { NavLink } from "react-router-dom";

const Project = ({ title, image, desc, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      className="max-w-sm glass-card overflow-hidden group relative"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
      </div>

      <div className="p-6 relative">
        <h3 className="text-xl font-black mb-3 text-gradient">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
          {desc}
        </p>

        <NavLink
          to={link}
          target="_blank"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-xl transition-all shadow-[0_4px_15px_rgba(168,85,247,0.3)] hover:shadow-[0_4px_20px_rgba(168,85,247,0.5)] active:scale-95"
        >
          View Project
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default Project;
