import {Injectable} from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Detai_planning} from '../model/Detai_planning';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DetaiPlanningService {
  public host = 'http://localhost:9093/detailPlanning';
  public hoste = 'http://localhost:9093';

  constructor(private http: HttpClient, private authen: AuthentificationService) {
  }

  getDetail(idPlanning): Observable<any> {
    return  this.http.get<any>(this.host + '/' + idPlanning);
  }

  getStock(): Observable<any> {
    return  this.http.get<any>(this.host + '/stock' );
  }

  getStockByCie(): Observable<any> {
    return  this.http.get<any>(this.host + '/stock/cie' );
  }
  save(detail) {
    return this.http.post(this.host, detail);
  }

  getDetailByLigne(): Observable<any> {
    return  this.http.get<any>(this.host + '/Detail/ligne' );
  }

  getAllchamps(): Observable<any> {
    return  this.http.get<any>(this.host + '/all' );
  }
    getEquipe(): Observable<any> {
    return  this.http.get<any>(this.host + '/equipe' );
  }

}
