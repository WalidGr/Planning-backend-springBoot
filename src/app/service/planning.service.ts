import {Injectable} from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Planning} from '../model/Planning';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {


  public host = 'http://localhost:9093';

  constructor(private http: HttpClient, private authen: AuthentificationService) {
  }

  getAllPlanning() {
    const headers = new HttpHeaders({authorization: 'Bearer ' + this.authen.jwt});
    return this.http.get(this.host + '/allPlanning', {headers});
  }

  getAllPlanningsID(planningId: number): Observable<Planning> {

    return this.http.get<Planning>(this.host + '/allPlanning/' + planningId);
  }


  PostPlanning(formPlanning: Planning): Observable<any> {


    return this.http.post(this.host + '/createPlanning', formPlanning);
    // return this.http.delete(this.url+"{id}");

  }

  putPlanning(formPlanning: Planning) {
    return this.http.put(this.host + '/upPlanning/' + formPlanning.planning_id, formPlanning);

  }

  refrechList(): Observable<Planning[]> {

    return this.http.get<Planning[]>(this.host + '/allPlanning');
  }

  deletePlanning(planningId: number) {

    return this.http.delete(this.host + '/allPlanning/' + planningId);
  }
}
