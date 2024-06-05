import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/single-book.css";

function SingleBook() {
  const [theBook, setTheBook] = useState(null);
  const { id } = useParams();
  console.log("the book: ", theBook?.volumeInfo);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Fetching the book from the API
  useEffect(() => {
    async function getTheBook() {
      let url = "https://www.googleapis.com/books/v1/volumes?q=+isbn:" + id;
      await fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data?.totalItems !== 0) {
            setTheBook(...data.items);
          }
        });
    }
    getTheBook();
  }, [id]);

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
                  {/*theBook.searchInfo
                      ? theBook.searchInfo.textSnippet.length !== 0
                        ? theBook.searchInfo.textSnippet
                        : theBook.volumeInfo.description
          : theBook.volumeInfo.description*/}
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
