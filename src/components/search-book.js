import "../css/search-book.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function SearchBook(props) {
  // ============================================== //
  // Search in Google API
  // ============================================== //
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);

  async function getQueryResult(maxResult) {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        searchQuery +
        "&maxResults=" +
        maxResult
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data.items;
      });
    return console.log(response);
  }

  function dbounce(fn) {
    let timer;
    return function (...args) {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, 500);
    };
  }
  const debouncedFuction = dbounce((e) => {
    handleInput(e);
  });

  function handleInput(e) {
    console.log("inside handleInput");
    setSearchQuery(e.target.value.trim());

    // fetch(
    //   "https://www.googleapis.com/books/v1/volumes?q=" +
    //     searchQuery +
    //     "&maxResults=5"
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     let newList = [];
    //     data.items.forEach((item) => {
    //       newList.push(item);
    //     });
    //     setQueryResult(newList);
    //   });
    if (searchQuery.length !== 0) {
      let res = getQueryResult(5);
      res.then((data) => {
        setQueryResult(data);
      });
    }
  }

  function handleSearch() {
    getQueryResult(10);
  }

  return (
    <div className="search-container">
      <h1> Get Your Favourite Book</h1>
      <div className="search-block">
        <div className="inputNresult">
          <input
            placeholder="Enter Title, Author, ISBN"
            onChange={(e) => {
              debouncedFuction(e);
            }}
          ></input>
          <ul
            className={
              queryResult.length === 0 ? "hide-result" : "search-result"
            }
          >
            {queryResult.map((item) => (
              <li key={item.id}>
                <Link
                  to={
                    "/" +
                    item.volumeInfo.title.replace(/ /g, "-") +
                    "/ID=" +
                    item.id
                  }
                >
                  {item.volumeInfo.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleSearch}>Search Book</button>
      </div>
    </div>
  );
}

export default SearchBook;
