import Slider from "react-slick";
import "../assets/styles/newsSlider.scss";

const news = [
  {
    id: 1,
    title: "New Trends in UI/UX Design World Integration",
    descp:
      "Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of personal meet.",
    category: "Cryptocurrency",
    time: "September, 15 2020",
  },
  {
    id: 2,
    title: "New Trends in UI/UX Design World Integration",
    descp:
      "Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of personal meet.",
    category: "Cryptocurrency",
    time: "September, 15 2020",
  },
  {
    id: 3,
    title: "New Trends in UI/UX Design World Integration",
    descp:
      "Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of personal meet.",
    category: "Cryptocurrency",
    time: "September, 15 2020",
  },
  {
    id: 4,
    title: "New Trends in UI/UX Design World Integration",
    descp:
      "Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of personal meet.",
    category: "Cryptocurrency",
    time: "September, 15 2020",
  },
  {
    id: 5,
    title: "New Trends in UI/UX Design World Integration",
    descp:
      "Specially for our VIP customers the LH Crypto team representatives Alexander Smirnov and Antonis Lapos will conduct a number of personal meet.",
    category: "Cryptocurrency",
    time: "September, 15 2020",
  },
];

const NewsSlider = () => {
  const settings = {
    customPaging: function (i) {
      return <div className="slider_dot"></div>;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="newsSlider container">
      <Slider {...settings}>
        {news?.map((item) => (
          <div className="newsCard" key={item.id}>
            <a href="/" className="newsCard_container">
              <p className="newsCard_category">{item.category}</p>
              <br />
              <br />
              <h3 className="newsCard_title">{item.title}</h3>
              <p className="newsCard_descp">{item.descp}</p>
              <br />
              <br />
              <br />
              <br />
              <p className="descp newsCard_time">{item.time}</p>
            </a>
          </div>
        ))}
      </Slider>
      <br />
      <br />
      <br />
    </div>
  );
};

export default NewsSlider;
