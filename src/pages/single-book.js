import "../css/single-book.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SingleBook() {
  const [theBook, setTheBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getTheBook() {
      let url = "https://www.googleapis.com/books/v1/volumes/?q=" + id;
      await fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTheBook(...data.items);
          console.log(data.items);
        });
    }
    getTheBook();
  }, [id]);
  console.log(theBook);
  if (theBook.length !== 0) {
    return (
      <>
        <div className="container">
          {/* <h1>{theBook.id}</h1>
          <h2>{theBook.volumeInfo.title}</h2>
          <h3>{theBook.volumeInfo.authors}</h3>
          <h4>{theBook.volumeInfo.imageLinks.thumbnail}</h4>
          {theBook.volumeInfo.description} */}

          <div className="book-info-container">
            <div className="img-col">
              <img
                src={theBook.volumeInfo.imageLinks.thumbnail}
                alt="book-cover"
              />
            </div>
            <div className="info-col">
              <h1>{theBook.volumeInfo.title}</h1>
              <p>
                <span>Authors:</span> {theBook.volumeInfo.authors}
              </p>
              <div className="rating-container"></div>
              <div className="short-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium modi iure voluptatem eveniet, enim quae accusamus
                  perferendis optio cumque a repellat ea nesciunt deleniti vitae
                  voluptas dolores temporibus illo iusto libero amet ipsam
                  officiis velit. Odio cumque quos suscipit recusandae sapiente
                  adipisci quia deleniti aliquid, fugit, voluptate, tempore
                  voluptatum culpa. Beatae, quidem?
                </p>
              </div>
              <div className="button-group">
                <a href="/" className="read-online">
                  Read Online
                </a>
                <a href="/" className="buy-book">
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
    return null;
  }
}

export default SingleBook;
