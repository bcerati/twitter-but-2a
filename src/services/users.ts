import { BaseUser } from '../types/User';

export function getAuthenticatedUser(): BaseUser | null {
  return {
    id: 1,
    created_at: new Date().toString(),
    full_name: 'Trevon Taylor',
    email: 'trevon.taylor@gmail.com',
    password: '',
  };
}
