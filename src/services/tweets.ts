import { BaseLike } from '../types/Like';
import { Tweet } from '../types/Tweet';
import { BaseUser } from '../types/User';
import supabase from './supabase';

export function findAllTweets() {
  return supabase
    .from('tweets')
    .select(
      '*, user:users(*), likes(*), retweet:origin_tweet(*, user:users(*)), retweets:tweets(origin_tweet, user:users(id))'
    )
    .order('created_at', { ascending: false })
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
            return resp.data as BaseLike[];
          });
      } else {
        return supabase
          .from('likes')
          .delete()
          .eq('tweet_id', tweet.id)
          .eq('user_id', user.id)
          .then(function (resp) {
            return resp.data as null;
          });
      }
    });
}

export function retweet(tweet: Tweet, user: BaseUser) {
  return supabase
    .from('tweets')
    .select('*', { count: 'exact' })
    .eq('origin_tweet', tweet.id)
    .eq('user_id', user.id)
    .then(function (resp) {
      if (resp.count === 0) {
        return supabase
          .from('tweets')
          .insert({ origin_tweet: tweet.id, user_id: user.id })
          .select(
            '*, user:users(*), likes(*), retweet:origin_tweet(*, user:users(*)), retweets:tweets(origin_tweet, user:users(id))'
          )
          .then(function (resp) {
            return resp.data as Tweet[];
          });
      } else {
        return supabase
          .from('likes')
          .delete()
          .eq('tweet_id', resp.data![0].id)
          .then(function () {
            return supabase
              .from('tweets')
              .delete()
              .eq('origin_tweet', tweet.id)
              .eq('user_id', user.id)
              .then(function (resp) {
                return resp.data as null;
              });
          });
      }
    });
}
