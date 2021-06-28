import {Injectable} from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {HttpClient} from '@angular/common/http';
import {Ligne} from '../model/Ligne';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LigneService {
  formLigne: Ligne;
  list: Ligne[];
  public host = 'http://localhost:9093';

  constructor(private http: HttpClient, private authen: AuthentificationService) {
  }

  getAllligne(): Observable<Ligne[]> {

    return this.http.get<Ligne[]>(this.host + '/allLigne');
  }


  PostLigne(formLigne: Ligne) {


    return this.http.post(this.host + '/createLigne', formLigne);
    // return this.http.delete(this.url+"{id}");

  }

  putLigne(formLigne: Ligne) {
    return this.http.put(this.host + '/upLigne/' + formLigne.id_ligne, formLigne);

  }

  refrechList() {

    this.http.get(this.host + '/allLigne').toPromise().then(res => this.list = res as Ligne[]);
  }

  deleteLigne(id: number) {
    return this.http.delete(this.host + '/allLigne/' + id);
  }

}
