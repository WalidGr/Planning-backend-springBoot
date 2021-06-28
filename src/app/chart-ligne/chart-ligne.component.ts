import { Component, OnInit } from '@angular/core';
import {Detai_planning} from '../model/Detai_planning';
import {Chart} from 'chart.js';
import {DetaiPlanningService} from '../service/detai-planning.service';

@Component({
  selector: 'app-chart-ligne',
  templateUrl: './chart-ligne.component.html',
  styleUrls: ['./chart-ligne.component.css']
})
export class ChartLigneComponent implements OnInit {
  data: Detai_planning[];
  Player = [];
  Run = [];
  Chart: Chart;
  constructor(private detailPlanningService: DetaiPlanningService ) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.detailPlanningService.getDetailByLigne().subscribe(res => {
      console.log(res);
      res.forEach(y => {
        this.Player.push(y.ligne.nom_ligne);
        this.Run.push(y.quantite);
      });
      this.Chart = new Chart('canvas', {
        type: 'bar' ,
        data: {
          labels: this.Player,
          datasets: [
            {
              data: this.Run,
              borderColor: '#52ba0e',
              backgroundColor: [
                '#35b322',
                '#0000FF',
                '#9966FF',
                '#4C4CFF',
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
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }
}
