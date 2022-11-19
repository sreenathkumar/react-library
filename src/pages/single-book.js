import "../css/single-book.css";
import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function SingleBook() {
  const [theBook, setTheBook] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  let buyUrl, imgUrl, bookTitle, bookAuthor, bookDes, search;
  if (location.state) {
    ({ buyUrl, imgUrl, bookTitle, bookAuthor, bookDes, search } =
      location.state);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    async function getTheBook() {
      let url = "https://www.googleapis.com/books/v1/volumes?q=+isbn:" + id;
      await fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.totalItems !== 0) {
            setTheBook(...data.items);
          }
        });
    }
    getTheBook();
  }, [id]);

  if (theBook.length !== 0) {
    if (search === false) {
      return (
        <>
          <div className="container">
            <div className="book-info-container">
              <div className="img-col">
                <img src={imgUrl} alt="book-cover" />
              </div>
              <div className="info-col">
                <div className="info-head">
                  <h1>{bookTitle}</h1>
                  <p>
                    <span>Authors:</span> {bookAuthor}
                  </p>
                  <div className="rating-container"></div>
                </div>

                <div className="short-description">
                  <p>
                    {bookDes.length > 350
                      ? bookDes.substring(0, 350) + "..."
                      : bookDes}
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
                    href={buyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="buy-book"
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
            <div className="tab-content"></div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="container">
            <div className="book-info-container">
              <div className="img-col">
                <img
                  src={
                    theBook.volumeInfo.imageLinks.thumbnail
                      ? theBook.volumeInfo.imageLinks.thumbnail
                      : "/"
                  }
                  alt="book-cover"
                />
              </div>
              <div className="info-col">
                <div className="info-head">
                  <h1>{capitalizeFirstLetter(theBook.volumeInfo.title)}</h1>
                  <p>
                    <span>Authors:</span> {theBook.volumeInfo.authors}
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
            </div>
            <div className="tab-content"></div>
          </div>
        </>
      );
    }
  } else {
    return null;
  }
}

export default SingleBook;
