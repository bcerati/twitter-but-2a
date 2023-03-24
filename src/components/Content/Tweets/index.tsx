import { useEffect, useState } from 'react';
import { Tweet as TweetType } from '../../../types/Tweet';
import { retrieveTweets } from '../../../services/tweets';

import NewTweet from '../NewTweet';
import Tweet from './Tweet';
import { Link } from 'react-router-dom';

function Tweets() {
  const [tweets, setTweets] = useState<TweetType[]>();

  useEffect(function () {
    retrieveTweets().then(function (tweets) {
      setTweets(tweets.data as TweetType[]);
    });
  }, []);

  return (
    <>
      <NewTweet />

      {tweets?.map(function (tweet) {
        return (
          <Link to={`tweet/${tweet.id}`} >
            <Tweet
              key={tweet.id}
              tweet={tweet}
              appendTweet={function (
                tweet: TweetType | null,
                removeTweetId?: number
              ) {
                if (removeTweetId) {
                  setTweets(tweets?.filter((t) => t.id !== removeTweetId));
                } else if (tweet) {
                  setTweets([tweet, ...tweets!]);
                }
              }}
            />
          </Link>
        );
      })}
    </>
  );
}

export default Tweets;
