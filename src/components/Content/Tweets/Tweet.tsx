import TweetBody from './TweetBody';
import TweetFooter from './TweetFooter';
import TweetUser from './TweetUser';

import type { Tweet as TweetType } from '../../../types/Tweet';
import { useState } from 'react';
interface ITweetProps {
  tweet: TweetType;
  appendTweet?: (tweet: TweetType | null, removeTweetId?: number) => void;
}

function Tweet({ tweet: t, appendTweet }: ITweetProps) {
  const [tweet, setTweet] = useState<TweetType>(t);
  return (
      <div className="post">
        <TweetUser user={tweet.user!} />

        <div className="post__body">
          <TweetBody tweet={tweet} />
          <TweetFooter
            tweet={tweet}
            appendTweet={appendTweet}
            tweetUpdater={setTweet}
          />
        </div>
      </div>
  );
}

export default Tweet;
