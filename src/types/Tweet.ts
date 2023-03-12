import { Database } from '../../types/supabase';
import { BaseLike } from './Like';
import { BaseUser } from './User';

export type BaseTweet = Database['public']['Tables']['tweets']['Row'];

export interface Tweet extends BaseTweet {
  user?: BaseUser;
  likes?: BaseLike[];
}
