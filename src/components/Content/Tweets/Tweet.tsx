import TweetBody from './TweetBody';
import TweetFooter from './TweetFooter';
import TweetUser from './TweetUser';

import type { Tweet as TweetType } from '../../../types/Tweet';
import { Dispatch, SetStateAction } from 'react';

interface ITweetProps {
  tweet: TweetType;
  setTweets: Dispatch<SetStateAction<TweetType[] | undefined>>;
}

function Tweet({ tweet, setTweets }: ITweetProps) {
  return (
    <div className="post">
      <TweetUser />

      <div className="post__body">
        <TweetBody tweet={tweet} />
        <TweetFooter tweet={tweet} setTweets={setTweets} />
      </div>
    </div>
  );
}

export default Tweet;
