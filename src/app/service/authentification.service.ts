import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  host2 = 'http://localhost:9093';
  jwt: string;
  username: string;
  roles: Array<string>;


  constructor(private http: HttpClient) { }
 /* getUser(){
    return this.http.get(this.host2+"/users")
   }*/
  login(data) {
    return this.http.post(this.host2 + '/login', data, {observe: 'response'});
  }
  saveToken(jwt: string) {

    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();
  }
  parseJWT() {
    const jwtHelper = new JwtHelperService();
    const objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.obj;
    this.roles = objJWT.roles;
  }
  isAdmin() {
    return this.roles.indexOf('ADMIN') >= 0;
  }

  isEMPLOYEE() {
    return this.roles.indexOf('EMPLOYEE') >= 0;
  }

  isUser() {
    return this.roles.indexOf('USER') >= 0;
  }


  isAuthenticated() {
    return this.roles && (this.isAdmin() || this.isEMPLOYEE() || this.isUser());
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();

  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.initParams();
    location.reload();
  }
  initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }
}
