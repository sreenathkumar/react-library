import "../css/counter.css";
import Thumbnail from "../images/Counter-Image.png";
function Counter() {
  return (
    <div className="counter-item">
      <div className="counter-item-container">
        <img src={Thumbnail} alt="" />
        <div className="count_texts">
          <p className="count">5000+</p>
          <p className="count-title">Listed Books</p>
        </div>
      </div>
    </div>
  );
}
export default Counter;
