import "../assets/styles/AdvisorsCard.scss";

const AdvisorsCard = ({ image, name, designation }) => {
  return (
    <div className="advisorsCard">
      <img src={image} alt="" />
      <h3 className="advisors_name">{name}</h3>
      <p className="descp green">{designation}</p>
      <div className="social">
        <i className="bi bi-twitter"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-linkedin"></i>
      </div>
    </div>
  );
};

export default AdvisorsCard;
