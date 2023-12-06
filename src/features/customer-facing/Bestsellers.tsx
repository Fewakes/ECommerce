import React, { ReactNode } from "react";
import { BsStars, BsClock, BsGlobeAmericas } from "react-icons/bs";
import { TbCube } from "react-icons/tb";

interface ListItemProps {
  icon: ReactNode;
  children: ReactNode;
}

// Extracted ListItem component
const ListItem: React.FC<ListItemProps> = ({ icon, children }) => (
  <li className="mb-4 flex items-center gap-3">
    {icon}
    <span>{children}</span>
  </li>
);

interface Feature {
  icon: ReactNode;
  text: string;
}

interface ProductProps {
  image: string;
  title: string;
  features: Feature[];
  price: string;
}

// Extracted Product component
const Product: React.FC<ProductProps> = ({ image, title, features, price }) => (
  <div className="h-[31rem] w-[17rem] overflow-hidden rounded-lg shadow-custom">
    <img src={image} alt={title} className="h-2/5 w-full object-cover" />
    <div className="p-[24px]">
      <h3 className="mb-6 text-xl font-semibold">{title}</h3>
      <ul className="flex flex-col">
        {features.map((feature, index) => (
          <ListItem key={index} icon={feature.icon}>
            {feature.text}
          </ListItem>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-center gap-10 pb-10">
        <strong className="text-lg">{price}</strong>
        <button className="inline-block rounded-full bg-color-primary p-1.5 px-3  text-sm uppercase text-white no-underline">
          Add to cart
        </button>
      </div>
    </div>
  </div>
);

export default function Bestsellers() {
  const products = [
    {
      image: "chair-1.jpg",
      title: "The laid back",
      features: [
        {
          icon: <BsStars size={24} color="green" />,
          text: "Leisure and relaxing",
        },
        {
          icon: <BsClock size={24} color="green" />,
          text: "Comfortable for 4h",
        },
        {
          icon: <BsGlobeAmericas size={24} color="green" />,
          text: "Vegan leather",
        },
        { icon: <TbCube size={24} color="green" />, text: "Weighs 16 kg" },
      ],
      price: "£200",
    },
    {
      image: "chair-2.jpg",
      title: "The Worker Bee",
      features: [
        {
          icon: <BsStars size={24} color="green" />,
          text: "Work",
        },
        {
          icon: <BsClock size={24} color="green" />,
          text: "Comfortable for 8h",
        },
        {
          icon: <BsGlobeAmericas size={24} color="green" />,
          text: "Vegan leather",
        },
        { icon: <TbCube size={24} color="green" />, text: "Weighs 22 kg" },
      ],
      price: "£400",
    },
    {
      image: "chair-3.jpg",
      title: "The Chair 4/2",
      features: [
        {
          icon: <BsStars size={24} color="green" />,
          text: "Leisure and relaxing",
        },
        {
          icon: <BsClock size={24} color="green" />,
          text: "Comfortable all day!",
        },
        {
          icon: <BsGlobeAmericas size={24} color="green" />,
          text: "Organic cotton",
        },
        { icon: <TbCube size={24} color="green" />, text: "Weighs 80 kg" },
      ],
      price: "£950",
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="mb-12 text-center text-4xl font-semibold md:text-start">
        Our bestselling chairs
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-10 ">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </section>
  );
}
