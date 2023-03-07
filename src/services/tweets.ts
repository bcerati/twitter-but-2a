import { supabaseClient } from './supabase';

export function retrieveTweets() {
  return supabaseClient.from('tweets').select('*, user:users(*)');
}
