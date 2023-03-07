import { Tweet as TweetType } from '../../../types/Tweet';

interface ITweetBodyProps {
  tweet: TweetType;
}

function TweetBody({ tweet }: ITweetBodyProps) {
  return (
    <div>
      <div className="post__header">
        <div className="post__headerText">
          <h3>
            {tweet.user?.full_name}
            <span className="post__headerSpecial">
              <span className="material-icons post__badge"> verified </span>@
              {`user_${tweet.user?.id}`}
            </span>
          </h3>
        </div>
        <div className="post__headerDescription">{tweet.content}</div>
      </div>
    </div>
  );
}

export default TweetBody;
