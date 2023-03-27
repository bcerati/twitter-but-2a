import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { like, retweet } from '../../../services/tweets';
import { Tweet as TweetType } from '../../../types/Tweet';

interface ITweetFooterProps {
  tweet: TweetType;
  setTweets: Dispatch<SetStateAction<TweetType[] | undefined>>;
}

function TweetFooter({ tweet: baseTweet, setTweets }: ITweetFooterProps) {
  const user = useContext(UserContext);
  const [tweet, setTweet] = useState(baseTweet);

  const myLikeIndex = tweet.likes.findIndex(
    (like) => user!.id === like.user_id
  );

  const myRetweetIndex = tweet.retweets.findIndex(
    (retweet) => user!.id === retweet.user.id
  );

  return (
    <div className="post__footer">
      <div
        style={{
          visibility: tweet.origin_tweet ? 'hidden' : 'visible',
          color: myRetweetIndex > -1 ? 'blue' : 'black',
        }}
        className="pointer"
        onClick={function () {
          retweet(tweet, user!).then(function (retweet) {
            setTweets(function (previousTweets) {
              let tweets = [...previousTweets!];

              if (retweet) {
                tweets.unshift(retweet[0]);
              } else {
                tweets = tweets.filter((t) => {
                  return !(
                    t.user_id === user!.id && tweet.id === t.origin_tweet
                  );
                });
              }

              return tweets;
            });
          });
        }}
      >
        <span className="material-icons"> repeat </span>
        <span>{tweet.retweets.length}</span>
      </div>

      <div
        className="pointer"
        style={{ color: myLikeIndex > -1 ? 'blue' : 'black' }}
      >
        <span
          className="material-icons"
          onClick={function () {
            like(tweet, user!).then(function (like) {
              if (like) {
                tweet.likes.push(like[0]);
              } else {
                tweet.likes.splice(myLikeIndex, 1);
              }
              setTweet({ ...tweet });
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
