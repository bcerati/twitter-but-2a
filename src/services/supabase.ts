import { createClient } from '@supabase/supabase-js';

import { Database } from '../../types/supabase';

export const supabaseClient = createClient<Database>(
  'https://tirhiwwmhmyvpghpulwq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpcmhpd3dtaG15dnBnaHB1bHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1ODY4NTgsImV4cCI6MTk5MzE2Mjg1OH0.GKaTUnboNQ6HAy8qLAUvvdYSTUkvyWfclNR1oBrn3Ro'
);
