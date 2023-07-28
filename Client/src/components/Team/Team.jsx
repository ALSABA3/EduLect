import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Team.css";

const products = [
  {
    id: 1,
    name: "Ameer",
    description: "...",
    image: "/1.jpg",
  },
  {
    id: 2,
    name: "Abdullah",
    description: "...",
    image: "/2.png",
  },
  {
    id: 3,
    name: "Maryam",
    description: "...",
    image: "/2.png",
  },
  {
    id: 4,
    name: "Mahmoud",
    description: "...",
    image: "/4.jpg",
  },
  {
    id: 5,
    name: "someone",
    description: "...",
    image: "/5.jpg",
  },
  {
    id: 6,
    name: "someone",
    description: "...",
    image: "/6.jpg",
  },
  {
    id: 7,
    name: "someone",
    description: "...",
    image: "/7.jpg",
  },
  {
    id: 8,
    name: "someone",
    description: "...",
    image: "/8.jpg",
  },
  {
    id: 9,
    name: "someone",
    description: "...",
    image: "/9.jpg",
  },
  {
    id: 10,
    name: "someone",
    description: "...",
    image: "/10.jpg",
  },
  // Add more products here
];

const ProductCard = ({ product }) => {
  return (
    <div className="product-card d-flex flex-wrap flex-column align-items-center justify-content-center">
      <img src={product.image} alt={product.name} className="mb-3" />
      <h3 className="text-center">{product.name}</h3>
      <p className="text-center">{product.description}</p>
    </div>
  );
};

const Team = () => {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <div className="slick-arrow slick-prev">Previous</div>,
    nextArrow: <div className="slick-arrow slick-next">Next</div>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="team">
      <div className="swappable-product-cards container h-100 ">
        <div className="d-flex flex-column h-100 align-content-center justify-content-center">
          <h2
            className="coming-soon-title fw-bold"
            style={{ fontFamily: "Delcom", color: "white" }}
          >
            Our Team
          </h2>
          <div>
            <Slider {...carouselSettings}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
