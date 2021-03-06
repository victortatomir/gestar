import Address from './address.model';

export default class User {
  id?: number;
  username: string;
  password: string;
  name: string;
  phone: string;
  doctor: boolean;
  address: Address;
}
