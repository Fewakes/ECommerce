import React from "react";
import { Link } from "react-router-dom";

// Extracted Button component
const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="rounded-full bg-color-primary p-4 px-8 text-lg uppercase text-white no-underline">
    {children}
  </button>
);

export default function Header() {
  return (
    <div>
      {/* Header */}
      <header className="space-between mt-5 flex flex-col-reverse items-center justify-center gap-10 md:flex-row lg:justify-between">
        <section>
          <h1 className="sm:text-1xl max-w-[28.5rem] text-center font-bold md:text-2xl lg:text-start lg:text-5xl">
            Crafting exquisite seating for an enhanced lifestyle is our passion.
          </h1>
          <p className="mb-6 max-w-[27.5rem] text-center text-lg leading-relaxed lg:text-start">
            Nestled in a cozy studio in the vibrant streets of London, we
            dedicate our time to meticulously refining chairs. The outcome is a
            harmonious fusion of aesthetics and ergonomic excellence, promising
            a positive influence on your well-being.
          </p>
          <div className="flex w-full justify-center lg:inline-block">
            <Button>
              {" "}
              <Link to="/store">Shop Chairs</Link>
            </Button>
          </div>
        </section>
        <img
          src="hero.jpg"
          alt="A photo of our shop"
          className="w-[20rem] rounded-xl lg:w-[27rem]"
        />
      </header>
    </div>
  );
}
