import User from './user.model';

export default class Consult {
  id?: number;
  user: User;
  date: number;
  accepted: boolean;
}
