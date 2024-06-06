import { useLoaderData } from "react-router-dom";
import "../css/single-book.css";

function SingleBook() {
  const theBook = useLoaderData();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="container">
      <div className="book-info-container">
        {theBook ? (
          <>
            <div className="img-col">
              <img
                src={theBook?.volumeInfo?.imageLinks?.thumbnail || "/"}
                alt="book-cover"
              />
            </div>
            <div className="info-col">
              <div className="info-head">
                <h1>{capitalizeFirstLetter(theBook.volumeInfo.title)}</h1>
                <p>
                  <span>Authors:</span>{" "}
                  {theBook.volumeInfo.authors.map((author) => author + ", ")}
                </p>
                <div className="rating-container"></div>
              </div>

              <div className="short-description">
                <p>
                  {theBook.volumeInfo.description.length > 450
                    ? theBook.volumeInfo.description.substring(0, 450) + "..."
                    : theBook.volumeInfo.description}
                </p>
              </div>
              <div className="button-group">
                <a
                  href={
                    theBook.volumeInfo.previewLink
                      ? theBook.volumeInfo.previewLink
                      : "/"
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="read-online"
                >
                  Preview Book
                </a>

                <a
                  href={
                    theBook.saleInfo.saleability === "FOR_SALE"
                      ? theBook.saleinfo.buyLink
                      : theBook.volumeInfo.previewLink
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="buy-book"
                >
                  Purchase Now
                </a>
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
