import React, { useState } from "react";
import "./Home.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaHandPointLeft,
} from "react-icons/fa";

import slide1 from "../../assets/Bihar3.jpg";
import slide2 from "../../assets/Nalanda.jpg";
import slide3 from "../../assets/Bihar3.jpg";
import slide6 from "../../assets/Patna.jpg";
import slide5 from "../../assets/Bihar5.jpg";
import slide4 from "../../assets/Ganga.jpg";
import slide7 from "../../assets/Madhubani.jpg";

const slides = [
  {
    title: "The Heart of Ancient Culture",
    place: "BIHAR",
    description:
      "Bihar is a land of rich heritage in Eastern India, famous for its ancient landmarks like Nalanda and Bodh Gaya. From spiritual hubs and historic ruins to bustling festivals and serene riverbanks, Bihar offers a unique blend of spirituality, culture, and timeless beauty.",
    image: slide1,
  },
  {
    title: "Grand Architecture",
    place: "PATNA",
    description:
      "The capital of Bihar blends heritage and modernity, making it a city worth exploring.",
    image: slide6,
  },
  {
    title: "Where History Speaks",
    place: "NALANDA",
    description:
      "Experience the ruins of the ancient Nalanda University, an iconic center of learning that shaped scholars across the globe.",
    image: slide2,
  },
  {
    title: "Spiritual Enlightenment",
    place: "BODH GAYA",
    description:
      "Walk the sacred grounds where Buddha attained enlightenment, making Bihar a beacon of spirituality.",
    image: slide3,
  },
  {
    title: "Festive Spirit",
    place: "CHHATH",
    description:
      "Bihar shines with its festivals like Chhath, a beautiful ritual honoring the Sun God.",
    image: slide5,
  },
  {
    title: "Nature's Calm",
    place: "GANGES",
    description:
      "Bihar’s serene riverbanks along the holy Ganges invite moments of peace and reflection.",
    image: slide4,
  },
  {
    title: "Art and Culture",
    place: "MADHUBANI",
    description:
      "Madhubani art, an ancient form of Bihar’s heritage, captures its artistic and cultural vibrance.",
    image: slide7,
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const { title, place, description, image } = slides[currentIndex];

  return (
    <div className="home">
      <img src={image} alt={place} className="home-background" />

      <div className="title">
        <h3>{title}</h3>
        <h1>{place}</h1>
      </div>

      <div className="info-wrap">
        <p>{description}</p>
      </div>

      <div className="cta">
        <button>
          Discover {place}
          <FaArrowRight />
        </button>
      </div>

      <div className="swipe-hint">
        <FaHandPointLeft /> Swipe left or right to see more
      </div>

      <div className="slider">
        <FaChevronLeft onClick={prevSlide} />
        <FaChevronRight onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Home;
