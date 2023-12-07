import React from "react";
import { FaFlask } from "react-icons/fa";
import { FaRegFaceGrin, FaRegHeart } from "react-icons/fa6";

interface USPProps {
  IconComponent: React.ElementType;
  title: string;
  description: string;
}

// Extracted USP component
const USP: React.FC<USPProps> = ({ IconComponent, title, description }) => (
  <section className="flex w-[14rem] flex-col gap-5">
    <div className="flex justify-center md:justify-start">
      <IconComponent size={32} color="green" />
    </div>
    <strong className="text-xl">{title}</strong>
    <p>{description}</p>
  </section>
);

export default function USPs() {
  return (
    <section className="mt-20">
      <h2 className="mb-12 text-center text-4xl font-semibold md:text-start">
        What makes our chairs special
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-10 text-center md:justify-between md:gap-0 md:text-start">
        <USP
          IconComponent={FaFlask}
          title="Science meets design"
          description="Purposeful aesthetic, meticulous craftsmanship redefine living spaces, create lasting impact."
        />
        <USP
          IconComponent={FaRegFaceGrin}
          title="Maximal comfort"
          description="Blend functionality, luxury - chairs promise unparalleled comfort, exquisite design."
        />
        <USP
          IconComponent={FaRegHeart}
          title="Ethical and sustainable"
          description="Ethical values, sustainability enrich life, contribute to a conscientious world."
        />
      </div>
    </section>
  );
}
