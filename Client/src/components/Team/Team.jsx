import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Team.css";

const products = [
  {
    id: 1,
    name: "Ameer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/AVATAR.png",
  },
  {
    id: 2,
    name: "Abdullah",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/AVATAR.png",
  },
  {
    id: 3,
    name: "Maryam",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/AVATAR.png",
  },
  {
    id: 4,
    name: "Mahmoud",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/AVATAR.png",
  },
  {
    id: 5,
    name: "someone",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/AVATAR.png",
  },
  // Add more products here
];

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="mb-3" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
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
