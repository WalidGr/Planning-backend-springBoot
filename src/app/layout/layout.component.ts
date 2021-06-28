import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../service/authentification.service';
import {Router} from '@angular/router';
import {NgxPermissionsService} from 'ngx-permissions';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  title = 'sagem';
  username: string;
  formaUser;
  currentUser;


  constructor(private authService: AuthentificationService, private router: Router,
              private permissionsService: NgxPermissionsService) {
  }


  ngOnInit(): void {
    const jwtHelper = new JwtHelperService();
    const decodedToken = jwtHelper.decodeToken(localStorage.getItem('token'));
    /*const perm = [decodedToken.roles];*/
    const perm = decodedToken.roles;
    console.log(perm);
    this.permissionsService.loadPermissions(perm);
    console.log(    this.permissionsService.getPermissions());
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //  this.authService.loadToken();
    // this.usertALL();
  }

  /*  usertALL(){
      this.authService.getUser()
      .subscribe(data=>{
        this.formaUser=data;

      },err=>{
        console.log(err);
      })
    }*/


  isAdmin() {
    return this.authService.isAdmin();
  }

  isUser() {
    return this.authService.isUser();
  }

  isEMPLOYEE() {
    return this.authService.isEMPLOYEE();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logOut() {
    this.authService.logout();
    // console.log(this.logOut);
  }

}
