import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero3D = () => {
    const containerRef = useRef(null);
    const mousePosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;

            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;

            mousePosition.current = { x, y };

            containerRef.current.style.transform = `
        perspective(1000px) 
        rotateY(${x * 0.5}deg) 
        rotateX(${-y * 0.5}deg)
      `;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none overflow-hidden">
            {/* Animated gradient orbs */}
            <motion.div
                ref={containerRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 360
                }}
                transition={{
                    opacity: { duration: 1.5 },
                    scale: { duration: 1.5 },
                    rotate: { duration: 60, repeat: Infinity, ease: "linear" }
                }}
            >
                {/* Purple orb */}
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
                    style={{
                        background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0) 70%)",
                        animation: "float 8s ease-in-out infinite"
                    }}
                />

                {/* Amber orb */}
                <div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
                    style={{
                        background: "radial-gradient(circle, rgba(252, 211, 77, 0.3) 0%, rgba(252, 211, 77, 0) 70%)",
                        animation: "float 10s ease-in-out infinite reverse"
                    }}
                />

                {/* Indigo orb */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl"
                    style={{
                        background: "radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(99, 102, 241, 0) 70%)",
                        animation: "float 12s ease-in-out infinite"
                    }}
                />
            </motion.div>

            {/* Animated grid overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px",
                    animation: "gridMove 20s linear infinite"
                }}
            />

            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
        </div>
    );
};

export default Hero3D;
