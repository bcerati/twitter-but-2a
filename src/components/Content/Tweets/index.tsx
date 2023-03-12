import { useEffect, useState } from 'react';
import { Tweet as TweetType } from '../../../types/Tweet';
import { retrieveTweets } from '../../../services/tweets';

import NewTweet from '../NewTweet';
import Tweet from './Tweet';

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
        return <Tweet key={tweet.id} tweet={tweet} />;
      })}
    </>
  );
}

export default Tweets;
