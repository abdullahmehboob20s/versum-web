import "../assets/styles/BlogCard.scss";

const BlogCard = ({ image, title, descp, time }) => {
  return (
    <a href="/" className="blogCard">
      <img src={image} alt={title} />
      <div className="blogCard_details">
        <h6 className="blogCard_title">{title}</h6>
        <p className="blogCard_descp">{descp}</p>
        <p className="blogCard_time">{time}</p>
      </div>
    </a>
  );
};

export default BlogCard;
