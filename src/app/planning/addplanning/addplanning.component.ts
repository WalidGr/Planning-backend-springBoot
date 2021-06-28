import {Component, Inject, OnInit} from '@angular/core';
import {PlanningService} from '../../service/planning.service';
import {PlanningTypeService} from '../../service/planning-type.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Planning} from '../../model/Planning';
import {NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Planning_type} from '../../model/Planning_type';
import {NgxNotificationService} from 'ngx-notification';

@Component({
  selector: 'app-addplanning',
  templateUrl: './addplanning.component.html',
  styleUrls: ['./addplanning.component.css']
})
export class AddplanningComponent implements OnInit {
  planning: Planning = new Planning();
  planningType: Planning_type[];
  minDate: Date = new Date();

  constructor(private planningService: PlanningService,
              private planningTypeService: PlanningTypeService,
              private datePipe: DatePipe,
              private dialog: MatDialog, public dialogRef: MatDialogRef<AddplanningComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private ngxNotificationService: NgxNotificationService) {
  }

  ngOnInit() {
    this.getPlanning_type();
    this.planning = this.data;
    this.planning.date_fin = this.convertDate(this.planning.date_fin);
    this.planning.date_debut = this.convertDate(this.planning.date_debut);
  }


  getPlanning_type() {
    this.planningTypeService.getAllPlanning_type().subscribe(res => {
      this.planningType = res;
      if (this.planning.planning_id) {
        const index = this.planningType.findIndex(pt => pt.ptype_id === this.planning.planningType.ptype_id);
        this.planning.planningType = this.planningType[index];
      }
    });
  }

  onClose() {

    this.dialogRef.close();
  }

  onSubmit(form: NgForm) {

    if (this.planning.planning_id == null) {
      this.insertRecord(this.planning);
    } else {
      this.updateRecord(this.planning);
    }

    this.onClose();

  }


  insertRecord(planning) {
    this.planningService.PostPlanning(planning).subscribe(res => {
      if (res.success) {
        this.ngxNotificationService.sendMessage(res.message + ' : ' + res.detail, 'success', 'bottom-right');
      } else {
        this.ngxNotificationService.sendMessage(res.message + ' : ' + res.detail, 'warning', 'bottom-right');
      }
    }, ex => {
      this.ngxNotificationService.sendMessage('Erreur : opération non effectuée' , 'error', 'bottom-right');
      console.log(ex);
    });
  }

  updateRecord(planning) {
    this.planningService.putPlanning(planning).subscribe(res => {
    }, ex => {
      console.log(ex);
    });
  }

  changeDate() {
    console.log(this.minDate);
    const dateDebut = new Date(this.planning.date_debut);
    const dateFin = new Date();
    dateFin.setDate(dateDebut.getDate() + 6);
    this.planning.date_fin = this.convertDate(dateFin);
  }

  convertDate(date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
}
