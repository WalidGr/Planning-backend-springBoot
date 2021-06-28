import { Injectable } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Planning_type } from '../model/Planning_type';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanningTypeService {

  formPlanning_type :Planning_type;
  list :Planning_type[];
  public host:string="http://localhost:9093";

  constructor(private http:HttpClient, private authen:AuthentificationService) { }

  getAllPlanning_type(): Observable<Planning_type[]> {
    let headers= new HttpHeaders({'authorization':'Bearer '+this.authen.jwt})
    return this.http.get<Planning_type[]>(this.host+"/allPlanning_type",{headers:headers});
  }


  PostPlanning_type(formPlanning_type :Planning_type){

    let headers= new HttpHeaders({'authorization':'Bearer '+this.authen.jwt})
      return this.http.post(this.host+"/createPlanning_type",formPlanning_type,{headers:headers});
     // return this.http.delete(this.url+"{id}");

  }

  putPlanning_type(formPlanning_type :Planning_type){
    return this.http.put(this.host+"/upPlanning_type/"+formPlanning_type.ptype_id,formPlanning_type);

  }
  refrechList(){
    let headers= new HttpHeaders({'authorization':'Bearer '+this.authen.jwt})
    this.http.get(this.host+"/allPlanning_type",{headers:headers}).toPromise().then(res=> this.list=res as Planning_type[]);
  }

  deletePlanning_type(ptype_id :number){
    let headers= new HttpHeaders({'authorization':'Bearer '+this.authen.jwt})
    return this.http.delete(this.host+"/allPlanning_type/"+ptype_id,{headers:headers});
  }
}
