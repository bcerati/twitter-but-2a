import TweetBody from './TweetBody';
import TweetFooter from './TweetFooter';
import TweetUser from './TweetUser';

import type { Tweet as TweetType } from '../../../types/Tweet';
import { useState } from 'react';
interface ITweetProps {
  tweet: TweetType;
}

function Tweet({ tweet: t }: ITweetProps) {
  const [tweet, setTweet] = useState<TweetType>(t);

  return (
    <div className="post">
      <TweetUser user={tweet.user!} />

      <div className="post__body">
        <TweetBody tweet={tweet} />
        <TweetFooter tweet={tweet} tweetUpdater={setTweet} />
      </div>
    </div>
  );
}

export default Tweet;
