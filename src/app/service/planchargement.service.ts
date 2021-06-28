import { Injectable } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Planchargement } from '../model/Planchargement';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PlanchargementService {

  formaPlans: Planchargement;
  list:Planchargement[];
  public host:string="http://localhost:9093";
  constructor(private http:HttpClient, private authen:AuthentificationService) { }



  populateForm(formaPlans){
   // this.form.setValue(formaPlans);
    this.formaPlans =Object.assign({},formaPlans);
  }

  getAllPlans(){
    let headers= new HttpHeaders({'authorization':'Bearer '+this.authen.jwt})
    return this.http.get(this.host+"/allPlanchargement",{headers:headers});
  }


  PostPlan(formaPlans :Planchargement){

    let headers= new HttpHeaders({'authorization':'Bearer '+this.authen.jwt})
      return this.http.post(this.host+"/createPlanchargement",formaPlans,{headers:headers});
     // return this.http.delete(this.url+"{id}");

  }

  putPlan(formaPlans :Planchargement){
    let headers= new HttpHeaders({'authorization':'Bearer '+this.authen.jwt})
    return this.http.put(this.host+"/upPlanchargement/"+formaPlans.id_planchargement,formaPlans,{headers:headers});

  }
  refrechList(){
    let headers= new HttpHeaders({'authorization':'Bearer '+this.authen.jwt})
    this.http.get(this.host+"/allPlanchargement",{headers:headers}).toPromise().then(res=> this.list=res as Planchargement[]);
  }

  deletePlan(id_planchargement :number){
    let headers= new HttpHeaders({'authorization':'Bearer '+this.authen.jwt})
    return this.http.delete(this.host+"/allPlanchargement/"+id_planchargement,{headers:headers});
  }



}
