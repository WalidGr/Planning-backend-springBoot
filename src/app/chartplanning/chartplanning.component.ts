import { Component, OnInit } from '@angular/core';
import {Detai_planning} from '../model/Detai_planning';
import {Chart} from 'chart.js';
import {DetaiPlanningService} from '../service/detai-planning.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {PlanningService} from '../service/planning.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-chartplanning',
  templateUrl: './chartplanning.component.html',
  styleUrls: ['./chartplanning.component.css']
})
export class ChartplanningComponent implements OnInit {

  data: Detai_planning[];
  Player = [];
  Run = [];
  Linechart: Chart;
  constructor(private detailPlanningService: DetaiPlanningService ,
              private activatedRoute: ActivatedRoute,
              private datePipe: DatePipe,
              private router: Router,
              private planningService: PlanningService) {


  }
  // doughnutChartLabels: Label[] ;
  // barChartLabels2: Label[]  ;
  // barChartLabels: Label[]  ;
  // doughnutChartData: MultiDataSet ;
  // barChartData2: MultiDataSet;
  // barChartData: MultiDataSet;
  // doughnutChartType: ChartType = 'doughnut';
  // barChartType2: ChartType = 'bar';
  // barChartType: ChartType = 'doughnut';
  // barChartLegend = true;
  // barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.detailPlanningService.getAllchamps().subscribe(res => {
      console.log(res);
      res.forEach(y => {
        this.Player.push(this.convertDate(y.planning.date_debut));
        this.Run.push(y.quantite);
      });
      this.Linechart = new Chart('canvas', {
        type: 'line' ,
        data: {
          labels: this.Player,
          datasets: [
            {
              data: this.Run,
              borderColor: '#4829b3',
              backgroundColor: '#21ceff',
            }
          ]
        },
        options: {
          legend: {
            display: false
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
  clickLien(form: NgForm) {
    this.router.navigate(['/chartplanning']);
  }
  convertDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
}

