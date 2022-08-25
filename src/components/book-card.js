import "../css/book-card.css";
import { Link } from "react-router-dom";

function BookCard(props) {
  return (
    <div className="card-container">
      <div className="img-container">
        <Link
          to={props.title.replace(/ /g, "-") + "/ID=" + props.isbn}
          state={{
            buyUrl: props.buyUrl,
            imgUrl: props.img,
            bookTitle: props.title,
            bookAuthor: props.author,
            bookDes: props.des,
            search: false,
          }}
        >
          <div className="builder-image-sizer image-sizer">
            <img alt="book-thumbnail" src={props.img} className="image" />
          </div>
        </Link>
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
