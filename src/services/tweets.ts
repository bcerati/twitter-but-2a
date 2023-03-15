import { Tweet } from '../types/Tweet';
import { BaseUser } from '../types/User';
import supabase from './supabase';

export function findAllTweets() {
  return supabase
    .from('tweets')
    .select('*, user:users(*), likes(*)')
    .then(function (resp) {
      return resp.data as Tweet[];
    });
}

export function like(tweet: Tweet, user: BaseUser) {
  return supabase
    .from('likes')
    .select('*', { count: 'exact' })
    .eq('tweet_id', tweet.id)
    .eq('user_id', user.id)
    .then(function ({ count }) {
      if (count === 0) {
        return supabase
          .from('likes')
          .insert({ tweet_id: tweet.id, user_id: user.id })
          .select('*')
          .then(function (resp) {
            return resp.data;
          });
      } else {
        return supabase
          .from('likes')
          .delete()
          .eq('tweet_id', tweet.id)
          .eq('user_id', user.id)
          .then(function (resp) {
            return resp.data;
          });
      }
    });
}
