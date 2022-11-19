import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";

export default function Categories() {
   const [weeklyList, setWeeklyList] = useState([])


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

   return (
      <div className='container'>
         <div className="all-container">
            {
               weeklyList.map((item, index) => <CategoryCard key={index} category={item} />)
            }
         </div>

      </div>
   )
}
