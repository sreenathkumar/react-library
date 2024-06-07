import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components/App";
import Home from "../pages/home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Categories from "../pages/Categories";
import CategoryPage from "../pages/CategoryPage";
import SearchResult from "../pages/search-results";
import SingleBook from "../pages/single-book";
import { singleBookLoader } from "../loaders/singleBookLoader";
import { categoryProductsLoader } from "../loaders/categoryProductsLoader";
import { searchResultLoader } from "../loaders/searchResultLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", index: true, element: <Home /> },
      { path: "about-us", element: <About /> },
      { path: "contact-us", element: <Contact /> },
      { path: "categories", element: <Categories /> },
      {
        path: "categories/:categoryTitle",
        element: <CategoryPage />,
        loader: categoryProductsLoader,
      },
      {
        path: "search-result",
        element: <SearchResult />,
        loader: searchResultLoader,
      },
      { path: ":title", element: <SingleBook />, loader: singleBookLoader },
    ],
  },
]);
