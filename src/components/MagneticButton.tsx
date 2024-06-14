'use client'

import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";

type Props = {}

const MagneticButton =
    ({ children }:
        { children: ReactNode;}) => {

        const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
        const [isHovering, setIsHovering] = useState(false);

        const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
            const { clientX, clientY } = event;
            const rect = event.currentTarget.getBoundingClientRect();
            const x = (clientX - (rect.left + rect.width / 2)) / 15;
            const y = (clientY - (rect.top + rect.height / 2)) / 12;
            setMousePosition({ x, y });
        };

        return (
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => {
                    setIsHovering(false);
                    setMousePosition({ x: 0, y: 0 });
                }}
                style={{
                    transform: isHovering
                        ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
                        : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                    transition: "transform 0.1s ease-out",
                }}
               
            >
                {children}
            </motion.div>
        )
    }

export default MagneticButton