import {Component, OnInit} from '@angular/core';
import {PlanningService} from '../service/planning.service';
import {Planning} from '../model/Planning';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddplanningComponent} from './addplanning/addplanning.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  p = 1;
  term: any;
  listPlanning: Planning[];

  constructor(private planningService: PlanningService,
              private dialog: MatDialog,
              private router: Router,
              private currentRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.dialog.afterAllClosed.subscribe(res => {
      this.getAll();
      this.planningService.refrechList();
    });

    this.getAll();
  }

  getAll() {
    this.planningService.refrechList().subscribe(data => {
      this.listPlanning = data;
     // console.log(data);
    }, ex => {
      console.log(ex);
    });
  }

  onCreate() {
    const planning = new Planning();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.data = planning;
    this.dialog.open(AddplanningComponent, dialogConfig);
  }

  onEdit(planning: Planning) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    const plan = new Planning();
    Object.assign(plan, planning);
    dialogConfig.data = plan;
    this.dialog.open(AddplanningComponent, dialogConfig);
  }


  onDe(planningId: number) {
    this.planningService.deletePlanning(planningId).subscribe(res => {

      this.planningService.refrechList();
    });
  }
  clickAgenda(id: any) {
    this.router.navigate(['/planning', id]);
  }
}
