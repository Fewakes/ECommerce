import React from "react";

interface TestimonialProps {
  quote: string;
  text: string;
  author: string;
}

// Extracted Testimonial component
const Testimonial: React.FC<TestimonialProps> = ({ quote, text, author }) => (
  <div className="flex flex-col justify-center gap-7">
    <h2 className="text-2xl font-semibold text-white">{quote}</h2>
    <blockquote className="text-md max-w-xl text-lg italic text-white">
      {text}
    </blockquote>
    <cite className="text-white text-opacity-70">{author}</cite>
  </div>
);

export default function Testimonials() {
  return (
    <section className="mt-20">
      <div className="flex flex-col items-center justify-center gap-10 rounded-2xl bg-color-primary p-6 text-center md:flex-row md:items-start md:text-start lg:justify-between lg:gap-20">
        <img
          src="customers.jpg"
          alt="Customers"
          className="my-auto max-w-[16rem] rounded-xl"
        />
        <Testimonial
          quote="Essential Chairs for Daily Living"
          text="These chairs have become indispensable in our lives. Their unmatched comfort and timeless design make them a must-have. Highly recommended!"
          author="— Mary and Sarah Johnson"
        />
      </div>
    </section>
  );
}
