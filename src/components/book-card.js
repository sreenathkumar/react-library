import "../css/book-card.css";
import bookThumbnail from "../images/bookThumbnail.png";

function BookCard(props) {
  return (
    <div className="card-container">
      <div className="img-container">
        <a href="/">
          <div className="builder-image-sizer image-sizer">
            <img alt="book-thumbnail" src={props.img} className="image" />
          </div>
        </a>
      </div>
      <a href="/" className="book-title">
        {props.title}
      </a>
      <a href="/" className="author-name">
        {props.author}
      </a>
      <div className="review-bar-container">
        <div className="box"></div>
      </div>
    </div>
  );
}

export default BookCard;
