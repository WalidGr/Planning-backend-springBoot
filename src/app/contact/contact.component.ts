import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../service/authentification.service';
import {Router} from '@angular/router';
import {NgxPermissionsService} from 'ngx-permissions';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  currentUser;
  perm;
  constructor(private authService: AuthentificationService, private router: Router,
              private permissionsService: NgxPermissionsService) {
  }
  ngOnInit() {
    const jwtHelper = new JwtHelperService();
    const decodedToken = jwtHelper.decodeToken(localStorage.getItem('token'));
    const perm = decodedToken.roles;
    this.permissionsService.loadPermissions(perm);
    // console.log(  this.permissionsService.getPermissions());
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // console.log(this.currentUser);
    console.log(perm);
  }
}

