import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResult, updateSearchResult] = useState([]);

  return (
    <SearchContext.Provider value={{ searchResult, updateSearchResult }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
