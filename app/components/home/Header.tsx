import Carousel from "../Carousel";
export default function Header() {
  const slides = [
    {
      image: "/img-1.jpg",
      text: "Welcome to NextMart Store",
    },
    {
      image: "/img-2.jpg",
      text: "Big Savings on Every Order",
    },
    {
      image: "/img-3.jpg",
      text: "Fast Delivery. Quality Products",
    },
  ];

  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
}
