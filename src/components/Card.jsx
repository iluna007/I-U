import "../styles/Card.css";

const Card = ({ image, title, category }) => {
  const categoryLabel = Array.isArray(category)
    ? category.join(" · ")
    : category;

  return (
    <div className="card-project">
      <div className="card-overlay">
        <img src={image} alt={title} className="img-fluid card-img" />
        <div className="overlay">
          <div className="overlay-content">
            <div className="overlay-title">{title}</div>
            {categoryLabel && (
              <div className="overlay-category">{categoryLabel}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
