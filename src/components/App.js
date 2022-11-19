import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import Home from "../pages/home";
import SearchResult from "../pages/search-results";
import SingleBook from "../pages/single-book";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Categories from "../pages/Categories";
import Blog from "../pages/Blog";
import CategoryPage from "../pages/CategoryPage";

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
