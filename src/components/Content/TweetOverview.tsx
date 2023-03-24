import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { retrieveTweet } from '../../services/tweets';
import Title from './Title';
import Tweet from './Tweets/Tweet';
import { Tweet as TweetType }from '../../types/Tweet';

function TweetOverview() {

  const { tweetId } = useParams();
  const [tweet, setTweet] = useState<TweetType>();

  useEffect(function () {
    retrieveTweet(tweetId).then(function (tweets) {
      setTweet(tweets.data![0] as TweetType);
    });
  }, []);

  return (
    <div className="overview">
      <Title>Overview</Title>
      {tweet && <Tweet tweet={tweet} />}
    </div>
  );
}

export default TweetOverview;
