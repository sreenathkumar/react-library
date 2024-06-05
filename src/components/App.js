import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Blog from "../pages/Blog";
import Categories from "../pages/Categories";
import CategoryPage from "../pages/CategoryPage";
import Contact from "../pages/Contact";
import Home from "../pages/home";
import SearchResult from "../pages/search-results";
import SingleBook from "../pages/single-book";
import Footer from "./footer";
import Header from "./header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="search-result" element={<SearchResult />} />
          <Route path="/:title/ID=:id" element={<SingleBook />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryTitle" element={<CategoryPage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
