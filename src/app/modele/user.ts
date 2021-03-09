import {Company} from './company';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: Company;
}
