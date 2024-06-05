import "../css/search-book.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function SearchBook() {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setQueryResult([]);
      return;
    }

    let timer = setTimeout(() => {
      getQueryResult(searchQuery).then((result) => {
        setQueryResult(result);
      });
    }, 200);

    // Cleanup function
    return () => clearTimeout(timer);
  }, [searchQuery]);

  async function getQueryResult(query) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5`
    );
    const data = await response.json();
    return data?.items || [];
  }

  function handleInputChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="search-container">
      <h1>Get Your Favourite Book</h1>
      <div className="search-block">
        <div className="inputNresult">
          <input
            placeholder="Enter Title, Author, ISBN"
            onChange={handleInputChange}
            value={searchQuery}
          />
          <ul
            className={
              queryResult?.length === 0 ? "hide-result" : "search-result"
            }
          >
            {queryResult?.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/${item.volumeInfo.title.replace(/ /g, "-")}/ID=${
                    item?.volumeInfo?.industryIdentifiers?.[0]?.identifier
                  }`}
                >
                  {item.volumeInfo.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() =>
            searchQuery?.length > 0 &&
            navigate(`/search-result?query=${searchQuery}`)
          }
        >
          Search Book
        </button>
      </div>
    </div>
  );
}

export default SearchBook;
