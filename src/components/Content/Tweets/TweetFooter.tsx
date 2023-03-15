import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { like } from '../../../services/tweets';
import { Tweet as TweetType } from '../../../types/Tweet';

interface ITweetFooterProps {
  tweet: TweetType;
}

function TweetFooter({ tweet }: ITweetFooterProps) {
  const user = useContext(UserContext);

  return (
    <div className="post__footer">
      <div className="pointer">
        <span className="material-icons"> repeat </span>
      </div>

      <div className="pointer">
        <span
          className="material-icons"
          onClick={function () {
            like(tweet, user!).then(function (like) {
              if (like) {
                tweet.likes.push(like[0]);
              }
            });
          }}
        >
          favorite_border
        </span>
        <span>{tweet.likes.length}</span>
      </div>

      <div className="pointer">
        <span className="material-icons"> publish </span>
      </div>
    </div>
  );
}

export default TweetFooter;
