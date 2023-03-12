import { Database } from '../../types/supabase';
import { BaseLike } from './Like';
import { BaseUser } from './User';

export type BaseTweet = Database['public']['Tables']['tweets']['Row'];

export interface Tweet extends BaseTweet {
  original?: Tweet;
  user?: BaseUser;
  likes?: BaseLike[];
  retweets?: BaseTweet[];
}
