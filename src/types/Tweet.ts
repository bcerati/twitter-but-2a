import { Database } from '../../types/supabase';
import { BaseUser } from './User';

export type BaseTweet = Database['public']['Tables']['tweets']['Row'];

export interface Tweet extends BaseTweet {
  user?: BaseUser;
}
