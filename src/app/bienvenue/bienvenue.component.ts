import {Component, OnInit} from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';
import {Chart} from 'chart.js';
import {DetaiPlanningService} from '../service/detai-planning.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PlanningService} from '../service/planning.service';
import {Planning} from '../model/Planning';
import {Planning_type} from '../model/Planning_type';
import {Detai_planning} from '../model/Detai_planning';
import {namespaceHTML} from '@angular/core/src/render3';
import {NgForm} from '@angular/forms';
import {NgxPermissionsService} from 'ngx-permissions';
import {AuthentificationService} from '../service/authentification.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Roles} from '../model/Roles';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.css']
})
export class BienvenueComponent implements OnInit {
  currentUser;
  perm;
  data: Detai_planning[];
  Player = [];
  Run = [];
  Chart: Chart;
  constructor(private authService: AuthentificationService, private router: Router,
              private detailPlanningService: DetaiPlanningService,
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
    this.getAll();
  }
  getAll() {
    this.detailPlanningService.getStockByCie().subscribe(res => {
      console.log(res);
      res.forEach(y => {
        this.Player.push(y.cie.nom_cie);
        this.Run.push(y.quantite);
      });
      this.Chart = new Chart('canvas', {
        type: 'doughnut' ,
        data: {
          labels: this.Player,
          datasets: [
            {
              data: this.Run,
              borderColor: '#52ba0e',
              backgroundColor: [
                '#35b322',
                '#ff2c25',
                '#1f20ff',
                '#fffc0e',
                '#00FFFF',
                '#f990a7',
                '#aad2ed',
                '#FF00FF',
                'Blue',
                'Red',
                'Blue'
              ],
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: false
            }],
          }
        }
      });
    });
  }
}
