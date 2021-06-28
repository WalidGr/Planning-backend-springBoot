import { Injectable } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Cie } from '../model/cie';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CieService {

  formData: Cie;
  list: Cie[];
  public host = 'http://localhost:9093';
  constructor(private http: HttpClient, private authen: AuthentificationService) { }

  getAllCie(): Observable<Cie[]> {

    return this.http.get<Cie[]>(this.host + '/allCie');
  }

  getAllPlans() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authen.jwt});
    return this.http.get(this.host + '/allPlanchargement', {headers});
  }


  getRessource(url) {
     return this.http.get(url);
  }

  PostCie(formData: Cie) {

    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authen.jwt});
    return this.http.post(this.host + '/createCie', formData, {headers});
     // return this.http.delete(this.url+"{id}");

  }

  putCie(formData: Cie) {
    return this.http.put(this.host + '/allCie/' + formData.id, formData);

  }
  refrechList() {
    this.http.get(this.host + '/allCie').toPromise().then(res => this.list = res as Cie[]);
  }

  deleteCie(id: number) {
    return this.http.delete(this.host + '/allCie/' + id);
  }


}
