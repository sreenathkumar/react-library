import { useLoaderData } from "react-router-dom";
import "../css/single-book.css";
import noCover from "../images/Not found cover.png";

function SingleBook() {
  const theBook = useLoaderData();

  const title = theBook?.volumeInfo?.title || "";
  const description =
    theBook?.volumeInfo?.description ||
    "No description available for this book";
  const authors = theBook?.volumeInfo?.authors || [];
  const image = theBook?.volumeInfo?.imageLinks?.thumbnail;
  const previewLink = theBook?.volumeInfo?.previewLink || "/";
  const buyLink = theBook?.saleInfo?.buyLink || "/";
  const saleability = theBook?.saleInfo?.saleability;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="container">
      <div className="book-info-container">
        {theBook ? (
          <>
            <div className="img-col">
              <img src={image || noCover} alt="book-cover" />
            </div>
            <div className="info-col">
              <div className="info-head">
                <h1>{capitalizeFirstLetter(title)}</h1>
                <p>
                  <span>Authors:</span>{" "}
                  {authors.map((author) => author + ", ") || "No author"}
                </p>
                <div className="rating-container"></div>
              </div>

              <div className="short-description">
                <p>
                  {description?.length > 450
                    ? description?.substring(0, 450) + "..."
                    : description}
                </p>
              </div>
              <div className="button-group">
                <a
                  href={previewLink}
                  target="_blank"
                  rel="noreferrer"
                  className="read-online"
                >
                  Preview Book
                </a>
                {saleability === "FOR_SALE" && (
                  <a
                    href={buyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="buy-book"
                  >
                    Purchase Now
                  </a>
                )}
              </div>
            </div>
          </>
        ) : (
          <h2>The book is not available for screening</h2>
        )}
      </div>
    </div>
  );
}

export default SingleBook;
