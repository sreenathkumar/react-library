import { Link } from 'react-router-dom';
import '../css/category-card.css'

export default function CategoryCard({ category }) {
  const { list_name, list_name_encoded } = category || {};
  return (
    <Link to={`/categories/${list_name_encoded}`}>
      <div className="cat-card-container">
        {/* <div className="cat-img-container">
          <img alt='cat-category-thumbnail' src="https://img.freepik.com/free-vector/floral-card_53876-91231.jpg?w=740&t=st=1666378604~exp=1666379204~hmac=bc3ae514e59b46127ac34eea145209a3c96ce3922440ac7f70121495be73c7fb" />
        </div> */}
        <div className="cat-content-container">
          <div className="cat-contents">
            <h3>{list_name}</h3>
            {/* <p> 10 books found</p> */}
          </div>
          <div className='cat-icon-container'>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z" /></svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
