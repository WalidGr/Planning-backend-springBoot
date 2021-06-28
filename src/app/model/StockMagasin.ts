import {Planning} from './Planning';

export class StockMagasin {
  idstock: number;
  codecie: string;
  codeproduit: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  plannings: Planning;
}
