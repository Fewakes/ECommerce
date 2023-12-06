import Bestsellers from "../features/customer-facing/Bestsellers";
import Copyright from "../features/customer-facing/Copyright";
import Header from "../features/customer-facing/Header";
import Testimonials from "../features/customer-facing/Testimonials";
import USP from "../features/customer-facing/USP";

export default function MainPage() {
  return (
    <div className="mx-auto w-full max-w-screen-lg">
      <Header />
      <USP />
      <Testimonials />
      <Bestsellers />
      <Copyright />
    </div>
  );
}
