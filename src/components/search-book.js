import "../css/search-book.css";

function SearchBook() {
  return (
    <div className="search-container">
      <h1> Get Your Favourite Book</h1>
      <div class="search-block">
        <div class="inputNresult">
          <input placeholder="Enter Title, Author, ISBN"></input>
        </div>
        <button>Search Book</button>
      </div>
    </div>
  );
}

export default SearchBook;
