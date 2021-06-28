import { Component, OnInit } from '@angular/core';
import {Detai_planning} from '../model/Detai_planning';
import {Chart} from 'chart.js';
import {DetaiPlanningService} from '../service/detai-planning.service';

@Component({
  selector: 'app-chart-produittot',
  templateUrl: './chart-produittot.component.html',
  styleUrls: ['./chart-produittot.component.css']
})
export class ChartProduittotComponent implements OnInit {
  data: Detai_planning[];
  Player = [];
  Run = [];
  Chart: Chart;
  Chart2: Chart;
  constructor(private detailPlanningService: DetaiPlanningService ) { }

  ngOnInit() {
    this.getAll();
    this.getAllP();
  }
  getAll() {
    this.detailPlanningService.getStockByCie().subscribe(res => {
      console.log(res);
      res.forEach(y => {
        this.Player.push(y.cie.nom_cie);
        this.Run.push(y.quantite);
      });
      this.Chart = new Chart('canvas', {
        type: 'pie' ,
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
  getAllP() {
    this.detailPlanningService.getStock().subscribe(res => {
      console.log(res);
      res.forEach(y => {
        this.Player.push(y.cie.nom_cie);
        this.Run.push(y.quantite);
      });
      res.forEach(x => {
        this.Run.push(x.code_produit);
      });
      this.Chart2 = new Chart('statss', {
        type: 'line' ,
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
