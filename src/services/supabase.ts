import { createClient } from '@supabase/supabase-js';

import { Database } from '../../types/supabase';

export const supabaseClient = createClient<Database>(
  'https://plkmrchyzdhhdzasqdpy.supabase.co/',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsa21yY2h5emRoaGR6YXNxZHB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4NzI5NjYsImV4cCI6MTk5NDQ0ODk2Nn0.hxyMdu2nklqC7a02zv5o1tnV1DsKtB84v7zoyB4LjD4'
);
