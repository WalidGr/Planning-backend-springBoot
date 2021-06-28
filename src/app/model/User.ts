import {Roles} from './Roles';

export class User {
  id: number;
  username: string;
  confirmedPassword: string;
  password: string;
  nom: string;
  prenom: string;
  matricule: string;
  actived: string;

  createdAt: Date;
  updatedAt: Date;
  roles: Roles[];
}
