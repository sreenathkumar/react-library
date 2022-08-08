import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import Home from "../pages/home";
import SearchResult from "../pages/search-results";
import SingleBook from "../pages/single-book";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="search-result" element={<SearchResult />} />
          <Route path="/:title/ID=:id" element={<SingleBook />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
