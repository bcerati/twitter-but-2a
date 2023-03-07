import { Database } from '../../types/supabase';

export type BaseUser = Database['public']['Tables']['users']['Row'];
