import Slider from "react-slick";
import "../assets/styles/PressSlider.scss";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";
import banner4 from "../assets/images/banner4.png";
import banner5 from "../assets/images/banner5.png";

const pressNews = [
  {
    id: 1,
    image: banner1,
    descp:
      "“River  loach crocodile icefish ballan wrasse mooneye gray eel-catfish cannel bass squirrelfish canary rockfish. Sea snail forehead brooder coho salmon, Black mackerel”",
  },
  {
    id: 2,
    image: banner2,
    descp:
      "“River  loach crocodile icefish ballan wrasse mooneye gray eel-catfish cannel bass squirrelfish canary rockfish. Sea snail forehead brooder coho salmon, Black mackerel”",
  },
  {
    id: 3,
    image: banner3,
    descp:
      "“River  loach crocodile icefish ballan wrasse mooneye gray eel-catfish cannel bass squirrelfish canary rockfish. Sea snail forehead brooder coho salmon, Black mackerel”",
  },
  {
    id: 4,
    image: banner4,
    descp:
      "“River  loach crocodile icefish ballan wrasse mooneye gray eel-catfish cannel bass squirrelfish canary rockfish. Sea snail forehead brooder coho salmon, Black mackerel”",
  },
  {
    id: 5,
    image: banner5,
    descp:
      "“River  loach crocodile icefish ballan wrasse mooneye gray eel-catfish cannel bass squirrelfish canary rockfish. Sea snail forehead brooder coho salmon, Black mackerel”",
  },
];

const PressSlider = () => {
  const settings = {
    customPaging: function (i) {
      return <div className="slider_dot"></div>;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="pressSlider container">
      <Slider {...settings}>
        {pressNews?.map((news) => (
          <div className="press" key={news.id}>
            <div className="press_container">
              <p className="press_descp">{news.descp}</p>
              <img src={news.image} alt="" />
            </div>
          </div>
        ))}
      </Slider>
      <br /><br /><br />
    </div>
  );
};

export default PressSlider;
