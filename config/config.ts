import configOverload from './config.local';

const config = {
  SUPABASE_API_URL: 'https://plkmrchyzdhhdzasqdpy.supabase.co',
  SUPABASE_API_TOKEN: 'TOKEN',
};

export default {
  ...config,
  ...configOverload,
};
