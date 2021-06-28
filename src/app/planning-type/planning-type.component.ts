import { Component, OnInit } from '@angular/core';
import { PlanningService } from '../service/planning.service';
import { PlanningTypeService } from '../service/planning-type.service';
import { NgForm } from '@angular/forms';
import { Planning_type } from '../model/Planning_type';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddplanningTypeComponent } from './addplanning-type/addplanning-type.component';

@Component({
  selector: 'app-planning-type',
  templateUrl: './planning-type.component.html',
  styleUrls: ['./planning-type.component.css']
})
export class PlanningTypeComponent implements OnInit {
  p: number =1;

  constructor(private prdPlanning_type :PlanningTypeService,  private dialog : MatDialog) { }

  ngOnInit() {

    this.prdPlanning_type.refrechList();
    this.resetForm();

  }


  onCreate(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(AddplanningTypeComponent,dialogConfig);
  }

  onEdit(emp: Planning_type){



    this.prdPlanning_type.formPlanning_type =Object.assign({},emp);

   console.log(emp);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";

    dialogConfig.data=emp;
        const dialogRef=this.dialog.open(AddplanningTypeComponent,dialogConfig);


    dialogRef.afterClosed().subscribe( emp =>{
     this.prdPlanning_type.list=emp;


    }
  );
  }

  resetForm(form?  :NgForm){
    if(form != null)
    form.resetForm();
    this.prdPlanning_type.formPlanning_type={
      ptype_id : null,
      ptype_name : '',
      createdAt:new Date(),
      updatedAt:new Date(),


    }
  }
  onSubmit(form :NgForm){

    if(form.value.id==null)
    this.insertRecord(form);

    else
    this.updateRecord(form);


  }

  insertRecord(form :NgForm){
    this.prdPlanning_type.PostPlanning_type(form.value).subscribe(res=>{
       this.resetForm(form);

       this.prdPlanning_type.refrechList();

    });
   }
   populateForm(emp : Planning_type){
    this.prdPlanning_type.formPlanning_type =Object.assign({},emp);

  }
  updateRecord(form :NgForm){
   this.prdPlanning_type.putPlanning_type(form.value).subscribe(res=>{
    this.resetForm(form);
    this.prdPlanning_type.refrechList();
  });
}

onDe(ptype_id :number){
this.prdPlanning_type.deletePlanning_type(ptype_id).subscribe(res=>{

this.prdPlanning_type.refrechList();
});
}

}
