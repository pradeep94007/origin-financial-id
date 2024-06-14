'use client'
import { useEffect, useRef, useState } from 'react'


const ScrollLine = () => {

    const svgRef = useRef<SVGSVGElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    // To hide line before page load
    const [visible, setVisible] = useState(false);

    const scroll = () => {
        const svg = svgRef.current;
        const path = pathRef.current;

        if (!svg || !path) return;

        const distance = window.scrollY;
        const totalDistance = svg.clientHeight - window.innerHeight;
        const percentage = distance / totalDistance;
        const pathLength = path.getTotalLength();

        path.style.strokeDasharray = `${pathLength}`;
        path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;

        // If the scroll position reaches the end, set the final state of the animation
        if (percentage >= 1 ) {
            // Set dash offset to 0 to show entire path
            path.style.strokeDashoffset = '0'; 

            // Disable transition to prevent resetting
            path.style.transition = 'none';

        } else {
            path.style.transition = ''; // Re-enable transition
        }
    };

    useEffect(() => {
        scroll();
        window.addEventListener('scroll', scroll);
        //Set visible when scroll
        setVisible(true)

        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);



    return (
        <div className={visible ? 'block' : 'hidden'}>
            <svg
                ref={svgRef}
                height="2000"
                width="1000"
                viewBox="0 100 890 1840"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="squiggle absolute lg:top-[29vh] md:top-[-15vh] top-[15vh] -left-8 w-screen lg:h-[220vh] md:h-[200vh] h-[240vh] lg:rotate-[-37deg] md:rotate-[-15deg] rotate-[-10deg] -z-1  opacity-55 "

            >
                <path
                    d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 991.5 1890"
                    ref={pathRef}
                    strokeWidth="50"
                    stroke='#e0e0e0'
                    strokeLinecap="butt"
                />
            </svg>
        </div>
    )
}

export default ScrollLine