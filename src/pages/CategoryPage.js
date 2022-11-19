import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import BookCard from "../components/book-card";

export default function CategoryPage() {
   const [bookList, setBookList] = useState([])
   const { categoryTitle } = useParams();

   useEffect(() => {
      const getBookList = async () => {
         const bkList = await fetch(`https://api.nytimes.com/svc/books/v3/lists/${categoryTitle}.json?api-key=GaESzDWgFVIjf5U4lLsTKDpm4N6uOI2m`)
            .then((res) => res.json())
            .then((data) => data.results.books);

         setBookList(bkList)
      }
      getBookList()
   }, [categoryTitle])

   const makeCapitalize = (str) => {
      const strArray = str.replace(/-/g, ' ').split(" ");
      const newArr = []
      strArray.forEach((item) => {
         const word = item.charAt(0).toUpperCase() + item.slice(1);
         newArr.push(word)
      })
      return newArr.join(' ')
   }

   return (
      <div className='page-container'>
         <div className="title-container">
            <h2>{makeCapitalize(categoryTitle)}</h2>
         </div>
         <div className="breadcrumb-container">
            <span></span>
         </div>
         <div className="book-cards">
            {
               bookList.map((book, index) => <BookCard key={index} isbn={
                  book.primary_isbn13
                     ? book.primary_isbn13
                     : book.primary_isbn10
               }
                  img={book.book_image}
                  author={book.author}
                  title={book.title}
                  des={book.description}
                  buyUrl={book.amazon_product_url} />)
            }
         </div>
      </div>
   )
}
