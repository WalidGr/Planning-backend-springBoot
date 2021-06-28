import { Component, OnInit } from '@angular/core';
import {Detai_planning} from '../model/Detai_planning';
import {Chart} from 'chart.js';
import {DetaiPlanningService} from '../service/detai-planning.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-chart-equipe',
  templateUrl: './chart-equipe.component.html',
  styleUrls: ['./chart-equipe.component.css']
})
export class ChartEquipeComponent implements OnInit {

  data: Detai_planning[];
  Player = [];
  Run = [];
  Chart: Chart;
  constructor(private detailPlanningService: DetaiPlanningService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.detailPlanningService.getEquipe().subscribe(res => {
      console.log(res);
      res.forEach(y => {
        this.Player.push(y.equipe.nom_equipe + this.convertDate(y.planning.date_debut));
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
  convertDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
}
