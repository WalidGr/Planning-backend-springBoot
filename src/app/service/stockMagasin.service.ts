import {Injectable} from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StockMagasin} from '../model/StockMagasin';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockMagasinService {


  public host = 'http://localhost:9093';

  constructor(private http: HttpClient, private authen: AuthentificationService) {
  }

  getAllStock_magasine(): Observable<StockMagasin> {

    return this.http.get<StockMagasin>(this.host + '/allStock');
  }


  PostStock_magasin(stockMagasin: StockMagasin): Observable<any> {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authen.jwt});
    return this.http.post(this.host + '/createStock', stockMagasin, {headers});
    // return this.http.delete(this.url+"{id}");

  }

  putStock_magasin(stockMagasin: StockMagasin) {
    return this.http.put(this.host + '/upStock/' + stockMagasin.idstock, stockMagasin);

  }

  refrechList(): Observable<StockMagasin[]> {

   return  this.http.get<StockMagasin[]>(this.host + '/allStock');
  }

  deleteStock_magasin(idstock: number) {

    return this.http.delete(this.host + '/allStock/' + idstock);
  }
}
