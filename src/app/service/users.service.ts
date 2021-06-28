import {Injectable} from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/User';
import {Observable} from 'rxjs';
import {Roles} from '../model/Roles';
import {Cie} from '../model/cie';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  list: User [];
  public host = 'http://localhost:9093';

  constructor(private http: HttpClient, private authen: AuthentificationService) {
  }

  getAllRoles(): Observable<Roles> {

    return this.http.get<Roles>(this.host + '/roles');
  }
  getByUsername(username): Observable<Roles> {

    return this.http.get<Roles>(this.host + '/username/' + username);
  }


  PostUser(formUser: User): Observable<any> {


    return this.http.post(this.host + '/register', formUser);
    // return this.http.delete(this.url+"{id}");

  }

  putUser(formUser: User): Observable<any> {

    return this.http.put(this.host + '/updateUser', formUser);

  }

  refrechList(): Observable<User[]> {


    return this.http.get<User[]>(this.host + '/users');
  }

  refrechUser() {
    this.http.get(this.host + '/users').toPromise().then(res => this.list = res as User[]);
  }

  deleteUser(id: number) {

    return this.http.delete(this.host + '/users/' + id);
  }
}
