import "../assets/styles/TeamCard.scss";

const TeamCard = ({ image, name, designation }) => {
  return (
    <div className="teamCard">
      <img src={image} alt={name} />
      <div className="teamCard_details">
        <h3>{name}</h3>
        <p className="descp green">{designation}</p>
      </div>
      <div className="social">
        <i className="bi bi-twitter"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-linkedin"></i>
      </div>
    </div>
  );
};

export default TeamCard;
