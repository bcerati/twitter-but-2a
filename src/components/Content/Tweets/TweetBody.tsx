import type { Tweet as TweetType } from '../../../types/Tweet';

interface ITweetBodyProps {
  tweet: TweetType;
}

function TweetBody({ tweet }: ITweetBodyProps) {
  return (
    <div>
      <div className="post__header">
        <div className="post__headerText">
          <h3>
            {tweet.user.full_name}
            <span className="post__headerSpecial">
              <span className="material-icons post__badge"> verified </span>
              {`@user_${tweet.user.id}`}
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">
          {showRetweetInfos(tweet)}

          {tweet.content || tweet.retweet?.content}
        </div>
      </div>
    </div>
  );
}

function showRetweetInfos(tweet: TweetType) {
  if (tweet.retweet) {
    return (
      <span
        style={{
          display: 'block',
          marginBottom: '20px',
          color: '#959595',
          fontWeight: 'bold',
        }}
      >
        a retweeter le tweet de
        {tweet.retweet.user.full_name}
      </span>
    );
  }

  return null;
}

export default TweetBody;
