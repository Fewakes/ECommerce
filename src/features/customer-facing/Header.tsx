import React from "react";

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
            We design and build better chairs, for a better life
          </h1>
          <p className="mb-6 max-w-[27.5rem] text-center text-lg leading-relaxed lg:text-start">
            In a small shop in the heart of Lisbon, we spend our days
            relentlessly perfecting the chair. The result is a perfect blend of
            beauty and comfort, that will have a lasting impact on your health.
          </p>
          <div className="flex w-full justify-center lg:inline-block">
            <Button>Shop Chairs</Button>
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
