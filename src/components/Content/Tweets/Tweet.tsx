import TweetBody from './TweetBody';
import TweetFooter from './TweetFooter';
import TweetUser from './TweetUser';

import type { Tweet as TweetType } from '../../../types/Tweet';

interface ITweetProps {
  tweet: TweetType;
}

function Tweet({ tweet }: ITweetProps) {
  return (
    <div className="post">
      <TweetUser />

      <div className="post__body">
        <TweetBody tweet={tweet} />
        <TweetFooter tweet={tweet} />
      </div>
    </div>
  );
}

export default Tweet;
