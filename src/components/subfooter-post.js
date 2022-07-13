import "../css/subfooter-post.css";

function SubfooterPost(props) {
  return (
    <div className="post">
      <img src={props.image} alt="post-thumbnail" />
      <div className="p-texts">
        <h4 className="p-title">Post Title goes here</h4>
        <p className="p-content">
          Lorem ipsum dolor sit amet, consetetur sadipscing.
        </p>
      </div>
    </div>
  );
}

export default SubfooterPost;
