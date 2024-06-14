"use client";

import { useInView } from "framer-motion";

import { useRef } from "react";

export function SlideInFromLeft({
  children,
  className,
  animate,
  backgroundColor,
}: {
  children: React.ReactNode;
  className?: string;
  animate?:boolean;
  backgroundColor?:string,
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    // If animate is true it won't animate if, if animate is false there will be animations
    <div
      className={className}
      ref={ref}
      style={{
        backgroundColor: backgroundColor? backgroundColor : '',
        transform: isInView || animate ? "none" : "translateX(-200px)",
        opacity: isInView || animate ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      {children}
    </div>
  );
}


export function SlideInFromTop({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div
      className={className}
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(-100%)',
        opacity: isInView ? 1 : 0,
        transition: 'transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s, opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
      }}
    >
      {children}
    </div>
  );
}

export function SlideInFromBottom({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div
      className={className}
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(100%)',
        opacity: isInView ? 1 : 0,
        transition: 'transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s, opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
      }}
    >
      {children}
    </div>
  );


}

export function SlideInFromRight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <div
      className={className}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
    >
      {children}
    </div>
  );
}

export function ScaleAnimation({
  children,
  className,
  notInMobile
}: {
  children: React.ReactNode;
  className?: string;
  notInMobile?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  if (notInMobile && window.innerWidth < 1200) return (
    <div
      className={className}
    >
      {children}
    </div>
  )

  return (
    <div
      className={className}
      ref={ref}
      style={{
        transform: isInView ? "none" : "scale(.5)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {children}
    </div>
  );
}


export function StaggerAnimation({
  children,
  className,
  notInMobile
}: {
  children: React.ReactNode;
  className?: string;
  notInMobile?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  if (notInMobile && window.innerWidth < 1200) return (
    <div
      className={className}
    >
      {children}
    </div>
  )

  return (
     <div
      className={`stagger-element ${className}`}
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'scale(.5)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      {children}
    </div>
  );
}
