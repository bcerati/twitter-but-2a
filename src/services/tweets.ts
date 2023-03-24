import { BaseTweet } from '../types/Tweet';
import { BaseUser } from '../types/User';
import { supabaseClient } from './supabase';

export function retrieveTweet(id: string | undefined) {
  return supabaseClient
    .from('tweets')
    .select(
      '*, user:users(*), original:origin_tweet(*, user:users(*)), likes(*), retweets:tweets(*)'
    )
    .order('created_at', { ascending: false })
    .eq('id', id);
}


export function retrieveTweets() {
  return supabaseClient
    .from('tweets')
    .select(
      '*, user:users(*), original:origin_tweet(*, user:users(*)), likes(*), retweets:tweets(*)'
    )
    .order('created_at', { ascending: false });
}

export function like(tweet: BaseTweet, user: BaseUser) {
  return supabaseClient
    .from('likes')
    .select('*')
    .eq('tweet_id', tweet.id)
    .eq('user_id', user.id)
    .then(function (resp) {
      if (resp.data?.length === 0) {
        return supabaseClient
          .from('likes')
          .insert([
            {
              tweet_id: tweet.id,
              user_id: user.id,
            },
          ])
          .select('*')
          .then(function (resp) {
            if (resp.data) {
              return resp.data[0];
            }

            return null;
          });
      } else {
        return supabaseClient
          .from('likes')
          .delete()
          .eq('tweet_id', tweet.id)
          .eq('user_id', user.id)
          .then(function () {
            return null;
          });
      }
    });
}

export function retweet(tweet: BaseTweet, user: BaseUser) {
  return supabaseClient
    .from('tweets')
    .select('*')
    .eq('origin_tweet', tweet.id)
    .eq('user_id', user.id)
    .then(function (resp) {
      if (resp.data?.length === 0) {
        return supabaseClient
          .from('tweets')
          .insert([
            {
              origin_tweet: tweet.id,
              user_id: user.id,
            },
          ])
          .select(
            '*, user:users(*), original:origin_tweet(*, user:users(*)), likes(*), retweets:tweets(*)'
          )
          .then(function (resp) {
            if (resp.data) {
              return resp.data[0];
            }

            return null;
          });
      } else {
        return supabaseClient
          .from('tweets')
          .delete()
          .eq('origin_tweet', tweet.id)
          .eq('user_id', user.id)
          .then(function () {
            return null;
          });
      }
    });
}
