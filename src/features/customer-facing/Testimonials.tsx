export default function Testimonials() {
  return (
    <section className="mt-20">
      <div className="jusifys flex gap-20 rounded-2xl bg-color-primary p-6">
        <img
          src="customers.jpg"
          alt="photo"
          className="max-w-[14rem] rounded-xl"
        />
        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-2xl font-semibold text-white">
            "We couldn't live without these chairs anymore"
          </h2>
          <p className="text-md max-w-xl text-lg italic text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            repellat at, nesciunt quia cum minima ipsum culpa totam sapiente
            recusandae earum debitis doloribus in quasi voluptatibus!
          </p>
          <p className="text-white text-opacity-70">— Mary and Sarah Johnson</p>
        </div>
      </div>
    </section>
  );
}
