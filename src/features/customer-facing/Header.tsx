export default function Header() {
  return (
    <div>
      {/* Header */}
      <header className="mt-20 flex justify-between gap-10">
        <div className="self-center">
          <h1 className="max-w-[27.5rem] font-bold">
            We design and build better chairs, for a better life
          </h1>
          <p className="mb-6 max-w-[27.5rem] text-lg leading-relaxed">
            In a small shop in the heart of Lisbon, we spend our days
            relentlessly perfecting the chair. The result is a perfect blend of
            beauty and comfort, that will have a lasting impact on your health.
          </p>
          <button className="inline-block rounded-full bg-color-primary p-4 px-8 text-lg uppercase text-white no-underline">
            Shop Chairs
          </button>
        </div>
        <img src="hero.jpg" alt="photo" className="max-w-[28rem] rounded-xl" />
      </header>
    </div>
  );
}
