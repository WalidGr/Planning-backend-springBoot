import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../service/authentification.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {UsersService} from '../service/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthentificationService,
              private userService: UsersService,
              private router: Router) {
  }

  ngOnInit() {

  }

  onLogin(data) {

    this.authService.login(data).subscribe(resp => {
      console.log(resp);
      console.log(resp.headers.get('Authorization'));
      const jwt = resp.headers.get('Authorization');
      this.authService.saveToken(jwt);
// this.router.navigateByUrl("/accueil");
      const jwtHelperService = new JwtHelperService();
      const decodedToken = jwtHelperService.decodeToken(jwt);
      const username = decodedToken.sub;
      this.userService.getByUsername(username).subscribe(res => {
        localStorage.setItem('currentUser', JSON.stringify(res));
        this.router.navigate(['bienvenue']);
        setInterval(() => {

          location.reload();
        }, 1000);


      }, ex => {
        console.log(ex);
      });

// console.log(data.username);

    }, err => {

    });

  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isUser() {
    return this.authService.isUser();
  }

  isEMPLOYEE() {
    return this.authService.isEMPLOYEE();
  }

}
