import Slider from "react-slick";
import "../assets/styles/FeedbackSlider.scss";
import feedback from "../assets/images/feedback.png";

const FeedbackSlider = () => {
  const settings = {
    customPaging: function (i) {
      return <div className="slider_dot"></div>;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="feedback_slider">
      <Slider {...settings}>
        <div className="slider_inner">
          <p className="slider_text">
            Ac elit id et euismod faucibus. Id sed viverra ut malesuada. In
            blandit condimentum semper pharetra. Nunc turpis tristique sed cras
            faucibus velit consectetur enim volutpat. Et ornare tincidunt
            maecenas enim integer. Vel consequat non rhoncus et. Pellentesque a
            in amet leo ipsum. Dignissim odio placerat maecenas massa eu
            consectetur pulvinar purus viverra. Morbi imperdiet diam scelerisque
            nunc in urna, pretium commodo. Non cras felis pulvinar pellentesque.
            Tempus diam nibh cursus sem vitae parturient non.
          </p>
          <div className="slider_profile">
            <img src={feedback} alt="" />
            <div className="slider_profileDetails">
              <h4 className="slider_name">Bruno Penaldes</h4>
              <p className="descp green">POLAND</p>
              <div className="slider_ratings">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="slider_inner">
          <p className="slider_text">
            Ac elit id et euismod faucibus. Id sed viverra ut malesuada. In
            blandit condimentum semper pharetra. Nunc turpis tristique sed cras
            faucibus velit consectetur enim volutpat. Et ornare tincidunt
            maecenas enim integer. Vel consequat non rhoncus et. Pellentesque a
            in amet leo ipsum. Dignissim odio placerat maecenas massa eu
            consectetur pulvinar purus viverra. Morbi imperdiet diam scelerisque
            nunc in urna, pretium commodo. Non cras felis pulvinar pellentesque.
            Tempus diam nibh cursus sem vitae parturient non.
          </p>
          <div className="slider_profile">
            <img src={feedback} alt="" />
            <div className="slider_profileDetails">
              <h4 className="slider_name">Bruno Penaldes</h4>
              <p className="descp green">POLAND</p>
              <div className="slider_ratings">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="slider_inner">
          <p className="slider_text">
            Ac elit id et euismod faucibus. Id sed viverra ut malesuada. In
            blandit condimentum semper pharetra. Nunc turpis tristique sed cras
            faucibus velit consectetur enim volutpat. Et ornare tincidunt
            maecenas enim integer. Vel consequat non rhoncus et. Pellentesque a
            in amet leo ipsum. Dignissim odio placerat maecenas massa eu
            consectetur pulvinar purus viverra. Morbi imperdiet diam scelerisque
            nunc in urna, pretium commodo. Non cras felis pulvinar pellentesque.
            Tempus diam nibh cursus sem vitae parturient non.
          </p>
          <div className="slider_profile">
            <img src={feedback} alt="" />
            <div className="slider_profileDetails">
              <h4 className="slider_name">Bruno Penaldes</h4>
              <p className="descp green">POLAND</p>
              <div className="slider_ratings">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="slider_inner">
          <p className="slider_text">
            Ac elit id et euismod faucibus. Id sed viverra ut malesuada. In
            blandit condimentum semper pharetra. Nunc turpis tristique sed cras
            faucibus velit consectetur enim volutpat. Et ornare tincidunt
            maecenas enim integer. Vel consequat non rhoncus et. Pellentesque a
            in amet leo ipsum. Dignissim odio placerat maecenas massa eu
            consectetur pulvinar purus viverra. Morbi imperdiet diam scelerisque
            nunc in urna, pretium commodo. Non cras felis pulvinar pellentesque.
            Tempus diam nibh cursus sem vitae parturient non.
          </p>
          <div className="slider_profile">
            <img src={feedback} alt="" />
            <div className="slider_profileDetails">
              <h4 className="slider_name">Bruno Penaldes</h4>
              <p className="descp green">POLAND</p>
              <div className="slider_ratings">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="slider_inner">
          <p className="slider_text">
            Ac elit id et euismod faucibus. Id sed viverra ut malesuada. In
            blandit condimentum semper pharetra. Nunc turpis tristique sed cras
            faucibus velit consectetur enim volutpat. Et ornare tincidunt
            maecenas enim integer. Vel consequat non rhoncus et. Pellentesque a
            in amet leo ipsum. Dignissim odio placerat maecenas massa eu
            consectetur pulvinar purus viverra. Morbi imperdiet diam scelerisque
            nunc in urna, pretium commodo. Non cras felis pulvinar pellentesque.
            Tempus diam nibh cursus sem vitae parturient non.
          </p>
          <div className="slider_profile">
            <img src={feedback} alt="" />
            <div className="slider_profileDetails">
              <h4 className="slider_name">Bruno Penaldes</h4>
              <p className="descp green">POLAND</p>
              <div className="slider_ratings">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default FeedbackSlider;
