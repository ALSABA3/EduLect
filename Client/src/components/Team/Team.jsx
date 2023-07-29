import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Team.css";

const products = [
  {
    id: 1,
    name: "Amir Maghzoub",
    description: "MCHT DEP",
    image: "/1.png",
  },
  {
    id: 2,
    name: "Sara Khamis",
    description: "MCHT DEP",
    image: "/2.png",
  },
  {
    id: 3,
    name: "Kareem Al-Zalik",
    description: "MCHT DEP.",
    image: "/3.png",
  },
  {
    id: 4,
    name: "Mahmoud Fouad",
    description: "EEE DEP",
    image: "/4.png",
  },
  {
    id: 5,
    name: "Fayrouz Maghzoub",
    description: "Consultant",
    image: "/5.png",
  },
  {
    id: 6,
    name: "Abdulla Tafesh",
    description: "GBE DEP",
    image: "/6.png",
  },
  {
    id: 7,
    name: "Ahmed Musleh",
    description: "GBE DEP",
    image: "/7.png",
  },
  {
    id: 8,
    name: "Maryam Al-Otari",
    description: "Editor & Social Media Manager",
    image: "/8.png",
  },

  {
    id: 9,
    name: "Abdullah Elsabie",
    description: "Programmer & Computer DEP",
    image: "/9.png",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="product-card d-flex flex-wrap flex-column align-items-center justify-content-center">
      <img
        src={product.image}
        alt={product.name}
        className="center-cropped mb-3"
      />
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
          slidesToShow: 1,
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
            className="team-title fw-bold text-center my-4"
            style={{ fontFamily: "DAMENTIONDEMOREGULAR", color: "white" }}
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
