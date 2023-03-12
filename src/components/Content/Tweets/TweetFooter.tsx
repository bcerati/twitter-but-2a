import { Dispatch, SetStateAction, useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { like, retweet } from '../../../services/tweets';
import { BaseLike } from '../../../types/Like';
import { BaseTweet, Tweet } from '../../../types/Tweet';

interface ITweetFooterProps {
  tweet: Tweet;
  tweetUpdater: Dispatch<SetStateAction<Tweet>>;
  appendTweet: (tweet: BaseTweet | null, removeTweetId?: number) => void;
}

function TweetFooter({ tweet, tweetUpdater, appendTweet }: ITweetFooterProps) {
  const user = useContext(UserContext)!;

  return (
    <div className="post__footer">
      <div
        className="pointer"
        style={{
          color:
            myRetweetIndex(tweet.retweets || [], user.id) > -1
              ? 'blue'
              : 'black',
        }}
        onClick={function () {
          retweet(tweet, user).then(function (retweet) {
            const retweets = [...tweet.retweets!];

            // new like => we add it to the list of all likes for the tweet
            if (retweet) {
              retweets.push(retweet);
              appendTweet(retweet);
            } else {
              // the user already likes the tweet => we remove it from the list of all likes for the tweet
              retweets.splice(0, 1);

              appendTweet(
                retweet,
                tweet.retweets![myRetweetIndex(tweet.retweets || [], user.id)]
                  .id
              );
            }

            tweetUpdater({ ...tweet, retweets });
          });
        }}
      >
        <span className="material-icons"> repeat </span>
        <span>{tweet.retweets?.length || 0}</span>
      </div>

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

function myRetweetIndex(retweets: BaseTweet[], userId: number) {
  return retweets.findIndex((retweet) => retweet.user_id === userId);
}

export default TweetFooter;
