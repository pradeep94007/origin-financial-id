"use client";

import CareerSection2 from "@/components/CareerSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import HomeHeader from "@/components/HomeHeader";
import MissionVisionSection from "@/components/MissionVisionSection";
import ProductSection from "@/components/ProductSection";
import ScrollLine from "@/components/ScrollLine";
import ServiceSection from "@/components/ServiceSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhyUsSection from "@/components/WhyUsSection";
import { useEffect, useState } from "react";

const sectionIds = [
  "Home",
  "Our-mission",
  "Testimonials",
  "Services",
  "Products-scroll",
  "Why-us-scroll",
  "Career",
  "Our-team",
  "Events",
  "Blogs",
  "Faq",
];

export default function () {
  const [heroSection, setHeroSection] = useState({});
  const [visibleSection, setVisibleSection] = useState(sectionIds[0]);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: any) => {
      entries.forEach((entry: any) => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          setVisibleSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const observeElement = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    };

    sectionIds.forEach((id) => {
      observeElement(id);
    });

    // Disconnet the observer to clean up
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    // Overflow hidden for the svg line
    <div className="relative overflow-x-clip">
      {/* Nav bar */}
      <HomeHeader visibleSection={visibleSection} />

      {/* Scroll line */}
      <ScrollLine />

      {/* Hero section */}
      <HeroSection />

      {/* Mission Vision section */}
      <div className="m-5">
        <MissionVisionSection />
      </div>

      {/* Services section */}
      <ServiceSection />

      {/* Products section */}
      <ProductSection />

      {/* Why us  */}
      <WhyUsSection />

      {/* Career section */}
      <CareerSection2 />

      {/* Testimonials section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
