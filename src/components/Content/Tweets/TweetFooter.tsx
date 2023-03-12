import { Dispatch, SetStateAction, useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { like } from '../../../services/tweets';
import { BaseLike } from '../../../types/Like';
import { Tweet } from '../../../types/Tweet';

interface ITweetFooterProps {
  tweet: Tweet;
  tweetUpdater: Dispatch<SetStateAction<Tweet>>;
}

function TweetFooter({ tweet, tweetUpdater }: ITweetFooterProps) {
  const user = useContext(UserContext)!;

  return (
    <div className="post__footer">
      <span className="material-icons"> repeat </span>

      <div
        className="pointer"
        style={{
          color:
            myLikeIndex(tweet.likes || [], user.id) > -1 ? 'blue' : 'black',
        }}
        onClick={function () {
          like(tweet, user).then(function (like) {
            const likes = [...tweet.likes!];

            // new like => we add it to the list of all likes for the tweet
            if (like) {
              likes.push(like);
            } else {
              // the user already likes the tweet => we remove it from the list of all likes for the tweet
              likes.splice(myLikeIndex(likes, user.id), 1);
            }

            tweetUpdater({ ...tweet, likes: likes });
          });
        }}
      >
        <span className="material-icons">favorite_border</span>
        <span>{tweet.likes?.length || 0}</span>
      </div>

      <span className="material-icons"> publish </span>
    </div>
  );
}

function myLikeIndex(likes: BaseLike[], userId: number) {
  return likes.findIndex((like) => like.user_id === userId);
}

export default TweetFooter;
