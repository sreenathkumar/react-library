import { useSearchParams } from "react-router-dom";

function SearchResult() {
  const [params] = useSearchParams();
  const query = params.get("query");

  return <h2>THis is search result page: {query}</h2>;
}

export default SearchResult;
