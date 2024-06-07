import { Link } from "react-router-dom";
import "../css/book-card.css";
import noCover from "../images/Not found cover.png";

function BookCard(props) {
  const url = "/" + props.title.replace(/ /g, "-") + "?id=" + props.isbn;
  return (
    <div className="card-container">
      <div className="img-container">
        <Link
          to={url}
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
            <img
              alt="book-thumbnail"
              src={props.img || noCover}
              className="image"
            />
          </div>
        </Link>
      </div>
      <Link to={url} className="book-title">
        {props.title}
      </Link>
      <a href="/" className="author-name">
        {props.author}
      </a>
      {/* <div className="review-bar-container">
        <div className="box" ></div>
      </div> */}
    </div>
  );
}

export default BookCard;
