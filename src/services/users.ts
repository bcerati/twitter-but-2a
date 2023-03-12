import { BaseUser } from '../types/User';

export function getAuthenticatedUser(): null | BaseUser {
  //TODO: Implement this function

  return {
    created_at: new Date().toString(),
    email: 'trevon.taylor@gmail.com',
    full_name: 'Trevon Taylor',
    id: 1,
    password: '',
  };
}
