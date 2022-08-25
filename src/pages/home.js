import { useEffect, useState, useRef } from "react";

// All the components

import Hero from "../components/hero";
//import Counter from "./counter";
import CategorySlider from "../components/category-slider";
import BookCard from "../components/book-card";
import Testimonial from "../components/testimonial";
import Opinion from "../components/opinion";
import Subfooter from "../components/subfooter";
import Pagination from "../components/pagination";
import SearchBook from "../components/search-book";

function Home() {
  const [weeklyList, setWeeklyList] = useState([]); //List of the category of the best seller books of the week.
  const [bestBooks, setBestBooks] = useState([]); //List of the best selling books.
  const [query, setQuery] = useState("");
  const [allBooks, setAllBooks] = useState([]);
  const initialDataRef = useRef();

  const handleCategoryClick = (e) => {
    if (e.target.classList.contains("active")) {
      const ele = e.target.getAttribute("data-id");
      setQuery(ele);
    } else {
      setQuery("");
    }
  };
  function getBookImageUrl(Arr, listName, isbn) {
    let theUrl;
    Arr.forEach((listItem) => {
      if (listItem.list_name === listName) {
        listItem.books.forEach((item) => {
          if (item.primary_isbn10 === isbn) {
            theUrl = item.book_image;
          }
        });
      }
    });
    return theUrl;
  }

  useEffect(() => {
    async function getBestBooksDefault() {
      //Calling the api and store it to a variable
      let bestBooksLists = await fetch(
        "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=GaESzDWgFVIjf5U4lLsTKDpm4N6uOI2m"
      )
        .then((res) => res.json())
        .then((res) => res.results.lists);
      initialDataRef.current = bestBooksLists;

      //Collecting all of the books from the api response
      let allBks = [];
      bestBooksLists.forEach((item) => {
        item.books.forEach((book) => {
          allBks.push(book);
        });
      });
      setAllBooks(allBks);

      //Getting one book from each lists for featured section
      let list = [];
      for (let i = 0; i < bestBooksLists.length; i++) {
        const theList = bestBooksLists[i];
        let theBook = theList.books[0];
        if (list.length === 0) {
          list.push(theBook);
        } else {
          let found = false;
          for (let j = 0; j < list.length; j++) {
            if (theBook.primary_isbn10 === list[j].primary_isbn10) {
              found = true;
              break;
            }
          }
          if (found === false) {
            list.push(theBook);
          }
          if (list.length === 6) {
            break;
          }
        }
      }
      setBestBooks(list);
    }

    async function getBestBooksActive(q) {
      let bestBooksLists = await fetch(
        "https://api.nytimes.com/svc/books/v3/lists.json?list=" +
          q +
          "&api-key=GaESzDWgFVIjf5U4lLsTKDpm4N6uOI2m"
      )
        .then((res) => res.json())
        .then((res) => res.results);

      let list = [];

      for (let i = 0; i < bestBooksLists.length; i++) {
        //const theList = bestBooksLists;
        let theBook = bestBooksLists[i].book_details[0];
        let bookListName = bestBooksLists[i].list_name;
        let bookIsbn = theBook.primary_isbn10;

        let theBookUrl = getBookImageUrl(
          initialDataRef.current,
          bookListName,
          bookIsbn
        );
        let editedBook = { ...theBook, book_image: theBookUrl };

        if (list.length === 0) {
          list.push(editedBook);
        } else {
          let found = false;
          for (let j = 0; j < list.length; j++) {
            if (editedBook.primary_isbn10 === list[j].primary_isbn10) {
              found = true;
              break;
            }
          }
          if (found === false) {
            list.push(editedBook);
          }
          if (list.length === 6) {
            break;
          }
        }
      }
      setBestBooks(list);
    }
    if (query) {
      getBestBooksActive(query);
    } else {
      getBestBooksDefault();
    }
  }, [query]);

  //Getting the name of the weekly best seller category
  useEffect(() => {
    async function getCategoryList() {
      var bookList = await fetch(
        "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=GaESzDWgFVIjf5U4lLsTKDpm4N6uOI2m"
      )
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          var res = data.results;

          var list = [];
          res.forEach((item) => {
            if (item.updated === "WEEKLY") {
              list.push(item);
            }
          });
          //setBookList(res);
          return list;
        });

      return setWeeklyList(bookList);
    }
    getCategoryList();
  }, []);

  // ============================================== //
  // Pagination section
  // ============================================== //
  let pageNumberLimit;
  if (window.innerWidth < 400) {
    pageNumberLimit = 4;
  } else if (window.innerWidth > 768) {
    pageNumberLimit = 15;
  } else {
    pageNumberLimit = 5;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(18);
  const [maxPage, setMaxPage] = useState(pageNumberLimit);
  const [minPage, setMinPage] = useState(0);

  let pages = [];

  for (let i = 1; i <= Math.ceil(allBooks.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const renderPageNumbers = pages.map((number) => {
    if (number <= maxPage && number > minPage) {
      return (
        <li
          key={"p" + number}
          id={number}
          onClick={handleClick}
          className={`ab-li ${
            currentPage === number ? "paginition-active" : null
          }`}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = allBooks.slice(firstItemIndex, lastItemIndex);

  function UpdateCurrentPage(direction) {
    if (direction === "r") {
      setCurrentPage(currentPage + 1);
    } else if (direction === "l") {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNextbtn = () => {
    UpdateCurrentPage("r");
    if (currentPage === maxPage && currentPage <= pages.length) {
      setMinPage(currentPage);
      if (currentPage + pageNumberLimit <= pages.length) {
        setMaxPage(maxPage + pageNumberLimit);
      } else {
        setMaxPage(pages.length);
      }
    }
    if (currentPage === pages.length) {
      setCurrentPage(1);
      setMaxPage(pageNumberLimit);
      setMinPage(0);
    }
  };

  const handlePrevbtn = () => {
    if (currentPage === 1) {
      setMaxPage(pages.length);
      setMinPage(pages.length - pageNumberLimit);
      setCurrentPage(pages.length);
    } else {
      UpdateCurrentPage("l");
      if (currentPage === minPage + 1) {
        setMaxPage(minPage);
        if (minPage - pageNumberLimit < 0) {
          setMinPage(0);
        } else {
          setMinPage(minPage - pageNumberLimit);
        }
      }
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPage) {
    pageIncrementBtn = (
      <li className="ab-li three-dot" onClick={handleNextbtn}>
        &hellip;
      </li>
    );
  }

  let pageDecrementBtn = null;
  if (minPage >= 1) {
    pageDecrementBtn = (
      <li className="ab-li three-dot" onClick={handlePrevbtn}>
        &hellip;
      </li>
    );
  }

  const handleLoadMore = () => {
    setItemsPerPage(itemsPerPage + 5);
  };

  return (
    <>
      <Hero />
      <section id="recent-book-list">
        <div className="container book-list">
          <div className="section-heading">
            <h2>Best Seller of this week</h2>
          </div>
          <CategorySlider
            list={weeklyList}
            click={handleCategoryClick}
          ></CategorySlider>
          <div className="book-cards">
            {bestBooks.map((item) => (
              <BookCard
                key={
                  item.primary_isbn13
                    ? item.primary_isbn13
                    : item.primary_isbn10
                }
                isbn={
                  item.primary_isbn13
                    ? item.primary_isbn13
                    : item.primary_isbn10
                }
                img={item.book_image}
                author={item.author}
                title={item.title}
                des={item.description}
                buyUrl={item.amazon_product_url}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="counter">
        <div className="counter container">
          <SearchBook />
        </div>
      </section>
      <section id="book-list">
        <div className="container book-list">
          <div className="section-heading">
            <h2>All Trending Books</h2>
          </div>
          <CategorySlider list={null}></CategorySlider>
          <div className="book-cards">
            {currentItem.map((item) => (
              <BookCard
                key={
                  item.primary_isbn13
                    ? item.primary_isbn13
                    : item.primary_isbn10
                }
                isbn={
                  item.primary_isbn13
                    ? item.primary_isbn13
                    : item.primary_isbn10
                }
                img={item.book_image}
                author={item.author}
                title={item.title}
                des={item.description}
                buyUrl={item.amazon_product_url}
              />
            ))}
          </div>
          <Pagination
            pageNo={renderPageNumbers}
            inc={pageIncrementBtn}
            dec={pageDecrementBtn}
            prev={handlePrevbtn}
            next={handleNextbtn}
          />
        </div>
      </section>
      <Testimonial></Testimonial>
      <Opinion></Opinion>
      <Subfooter></Subfooter>
    </>
  );
}

export default Home;
