function NewTweet() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetbox__input">
          <img
            src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
            alt=""
          />
          <input type="text" placeholder="What's happening?" />
        </div>
        <button className="tweetBox__tweetButton">Tweet</button>
      </form>
    </div>
  );
}

export default NewTweet;
