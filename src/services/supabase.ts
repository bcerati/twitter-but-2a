import { createClient } from '@supabase/supabase-js';
import config from '../../config/config';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  config.SUPABASE_API_URL,
  config.SUPABASE_API_TOKEN
);

export default supabase;
