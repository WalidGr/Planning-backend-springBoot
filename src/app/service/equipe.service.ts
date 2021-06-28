import {Injectable} from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {HttpClient} from '@angular/common/http';
import {Equipe} from '../model/Equipe';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  formEquipe: Equipe;
  list: Equipe[];

  public host: string = 'http://localhost:9093';

  constructor(private http: HttpClient, private authen: AuthentificationService) {
  }

  getAllEquipe(): Observable<Equipe[]> {

    return this.http.get<Equipe[]>(this.host + '/allEquipe');
  }


  PostEquipe(formEquipe: Equipe) {


    return this.http.post(this.host + '/createEquipe', formEquipe);
    // return this.http.delete(this.url+"{id}");

  }

  putEquipe(formEquipe: Equipe) {

    return this.http.put(this.host + '/upEquipe/' + formEquipe.id_equipe, formEquipe);

  }

  refrechList() {

    this.http.get(this.host + '/allEquipe').toPromise().then(res => this.list = res as Equipe[]);
  }

  deleteEquipe(id_equipe: number) {

    return this.http.delete(this.host + '/allEquipe/' + id_equipe);

  }
}
