import { createContext } from 'react';
import { BaseUser } from '../types/User';

export const UserContext = createContext<BaseUser | null>(null);
