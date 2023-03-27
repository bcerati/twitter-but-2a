import { useEffect, useState } from 'react';
import supabase from '../../../services/supabase';
import { findAllTweets } from '../../../services/tweets';
import { Tweet as TweetType } from '../../../types/Tweet';
import NewTweet from '../NewTweet';
import Tweet from './Tweet';

function Tweets() {
  const [tweets, setTweets] = useState<TweetType[]>();

  useEffect(function () {
    findAllTweets().then(function (tweets) {
      setTweets(tweets);
    });
  }, []);

  return (
    <>
      <NewTweet />

      <div>
        {tweets &&
          tweets.map(function (tweet) {
            return (
              <Tweet
                key={`mon_super_tweet_${tweet.id}`}
                tweet={tweet}
                setTweets={setTweets}
              />
            );
          })}
      </div>
    </>
  );
}

export default Tweets;
