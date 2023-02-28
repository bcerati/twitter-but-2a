import TweetBody from './TweetBody';
import TweetFooter from './TweetFooter';
import TweetUser from './TweetUser';

function Tweet() {
  return (
    <div className="post">
      <TweetUser />

      <div className="post__body">
        <TweetBody />
        <TweetFooter />
      </div>
    </div>
  );
}

export default Tweet;
