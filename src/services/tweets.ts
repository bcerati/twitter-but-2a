import { BaseTweet } from '../types/Tweet';
import { BaseUser } from '../types/User';
import { supabaseClient } from './supabase';

export function retrieveTweets() {
  return supabaseClient.from('tweets').select('*, user:users(*), likes(*)');
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
