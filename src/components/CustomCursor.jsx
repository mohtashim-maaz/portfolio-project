import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('button, a, .tech-icons, .glass-card')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(mousePosition.x - 16, springConfig);
    const cursorY = useSpring(mousePosition.y - 16, springConfig);

    return (
        <motion.div
            style={{
                translateX: cursorX,
                translateY: cursorY,
                pointerEvents: 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9999,
            }}
            animate={{
                scale: isHovering ? 2.5 : 1,
                backgroundColor: isHovering ? 'rgba(168, 85, 247, 0.15)' : 'rgba(168, 85, 247, 0.3)',
                border: isHovering ? '1px solid rgba(168, 85, 247, 0.5)' : '1px solid rgba(168, 85, 247, 0.2)',
            }}
            className="w-8 h-8 rounded-full backdrop-blur-[2px] hidden md:block"
        />
    );
};

export default CustomCursor;
