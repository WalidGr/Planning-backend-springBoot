import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './service/authentification.service';
import {NgxPermissionsService} from 'ngx-permissions';
import {JwtHelperService} from '@auth0/angular-jwt';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
