import "../css/category-slider.css";
import { useEffect, useState } from "react";

function CategorySlider(props) {
  const [width, setWidth] = useState(50);
  const categoryList = props.list;

  useEffect(() => {
    var sliderBox = document.getElementsByClassName("slider-box");
    var width = sliderBox[0].offsetWidth;
    setWidth(width);
  }, []);

  function addActive(e) {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
      let allLi = document.querySelectorAll("#content-container li");
      allLi.forEach((item) => {
        item.classList.remove("active");
      });

      e.target.classList.add("active");
    }
  }
  const scroll = (scrollOffset) => {
    var cont = document.getElementById("content-container");
    cont.scrollLeft += scrollOffset;
  };
  if (categoryList != null) {
    return (
      <div className="slider-container">
        <div
          className="controller controller-left"
          onClick={() => scroll(-width)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="16"
            height="16"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 512"
          >
            <path
              fill="currentColor"
              d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
            />
          </svg>
        </div>
        <div className="slider-box">
          <div id="content-container" className="content-container">
            {categoryList.map((item, index) => {
              return (
                <li
                  key={index}
                  data-id={item.list_name_encoded}
                  onClick={(e) => {
                    addActive(e);
                    props.click(e);
                  }}
                >
                  {item.display_name}
                </li>
              );
            })}
          </div>
        </div>
        <div
          className="controller controller-right"
          onClick={() => scroll(width)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="16"
            height="16"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 512"
          >
            <path
              fill="currentColor"
              d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
            />
          </svg>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default CategorySlider;
