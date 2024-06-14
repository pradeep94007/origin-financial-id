import React, { Children, WheelEvent, useRef } from 'react'

type Props = {}

interface SmoothScrollContainerProps {
  children: React.ReactNode;
}

const SmoothScrollContainer: React.FC<SmoothScrollContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault();

    const container = containerRef.current;
    const deltaY = e.deltaY || e.detail || (e.nativeEvent as any).wheelDelta;

    if (container) {
      container.scrollTop += deltaY
    }
  };

  return (
    <div ref={containerRef} onWheel={handleWheel}>{children}</div>
  )
}

export default SmoothScrollContainer