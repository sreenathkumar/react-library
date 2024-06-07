import { useLoaderData, useSearchParams } from "react-router-dom";
import BookCard from "../components/book-card";

function SearchResult() {
  const [params] = useSearchParams();
  const query = params.get("query");
  const resultData = useLoaderData();

  return (
    <section id="searched-book-list">
      <div className="container book-list">
        <div className="section-heading">
          <h2>Search results for the query "{query}"</h2>
        </div>
        <div className="book-cards">
          {resultData.lenght === 0 && <h2>No books found</h2>}

          {resultData?.map((item) => {
            const isbn = item?.volumeInfo?.industryIdentifiers?.find(
              (isbn) => isbn.type === "ISBN_13" || isbn.type === "ISBN_10"
            )?.identifier;

            return (
              <BookCard
                key={item.id}
                img={item.volumeInfo?.imageLinks?.thumbnail}
                author={item.volumeInfo?.authors?.join(", ")}
                title={item.volumeInfo?.title}
                des={item.volumeInfo?.description}
                buyUrl={item.volumeInfo?.infoLink}
                isbn={isbn}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SearchResult;
