import {Ligne} from './Ligne';
import {Planning} from './Planning';
import {Equipe} from './Equipe';
import {Cie} from './cie';

export class Detai_planning {
  id: number;
  besoin: string;
  code_produit: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  ligne: Ligne;
  planning: Planning;
  equips: Equipe;
  cies: Cie;
}
