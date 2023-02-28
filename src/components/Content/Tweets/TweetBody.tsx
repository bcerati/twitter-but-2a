function TweetBody() {
  return (
    <div>
      <div className="post__header">
        <div className="post__headerText">
          <h3>
            Somanath Goudar
            <span className="post__headerSpecial">
              <span className="material-icons post__badge"> verified </span>
              @somanathg
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <img
        src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg"
        alt=""
      />
    </div>
  );
}

export default TweetBody;
