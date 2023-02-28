import NewTweet from '../NewTweet';
import Tweet from './Tweet';

function Tweets() {
  return (
    <>
      <NewTweet />

      <div>
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </>
  );
}

export default Tweets;
