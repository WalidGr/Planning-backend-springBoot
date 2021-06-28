import { Injectable } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Configuration } from '../model/Configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  formConfiguration :Configuration;
  list :Configuration[];
  public host:string="http://localhost:9093";
  constructor(private http:HttpClient, private authen:AuthentificationService) { }

  getAllConfiguration(){
    let headers= new HttpHeaders({'authorization':'Bearer '+this.authen.jwt})
    return this.http.get(this.host+"/allConfig",{headers:headers});
  }





  PostConfiguration(formConfiguration :Configuration){

    let headers= new HttpHeaders({'authorization':'Bearer '+this.authen.jwt})
      return this.http.post(this.host+"/createConfig",formConfiguration,{headers:headers});
     // return this.http.delete(this.url+"{id}");

  }

  putConfiguration(formConfiguration :Configuration){

    return this.http.put(this.host+"/allConfig/"+formConfiguration.id_configuration,formConfiguration);

  }
  refrechList(){

    let headers= new HttpHeaders({'authorization':'Bearer '+this.authen.jwt})
    this.http.get(this.host+"/allConfig",{headers:headers}).toPromise().then(res=> this.list=res as Configuration[]);
  }

  deleteConfiguration(id_configuration :number){
    let headers= new HttpHeaders({'authorization':'Bearer '+this.authen.jwt})
    return this.http.delete(this.host+"/allConfig/"+id_configuration,{headers:headers});
  }

}
