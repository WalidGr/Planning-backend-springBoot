import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LigneService } from '../service/ligne.service';
import { Ligne } from '../model/Ligne';
import { PlanningTypeService } from '../service/planning-type.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddligneComponent } from './addligne/addligne.component';

@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.component.html',
  styleUrls: ['./ligne.component.css']
})
export class LigneComponent implements OnInit {
  planning_type :any;
  p: number =1;

  constructor(private prdLigne :LigneService, private prdType :PlanningTypeService,  private dialog : MatDialog) { }

  ngOnInit() {
    this.getALLPlanning_type();

    this.prdLigne.refrechList();
    this.resetForm();

  }

  onCreate(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(AddligneComponent,dialogConfig);
  }

  onEdit(emp: Ligne){



    this.prdLigne.formLigne =Object.assign({},emp);

   console.log(emp);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";

    dialogConfig.data=emp;
        const dialogRef=this.dialog.open(AddligneComponent,dialogConfig);


    dialogRef.afterClosed().subscribe( emp =>{
     this.prdLigne.list=emp;


    }
  );
  }

  resetForm(form?  :NgForm){
    if(form != null)
    form.resetForm();
    this.prdLigne.formLigne={
      id_ligne : null,
      nom_ligne : '',
      type:'',
      createdAt:new Date(),
      updatedAt:new Date(),


    }
  }

  getALLPlanning_type (){
    this.prdType.getAllPlanning_type().subscribe(res=>{
        console.log(res);
        this.planning_type=res;
        console.log(this.planning_type);
    })
 }

  onSubmit(form :NgForm){

    if(form.value.id==null)
    this.insertRecord(form);

    else
    this.updateRecord(form);


  }

  insertRecord(form :NgForm){
    this.prdLigne.PostLigne(form.value).subscribe(res=>{
       this.resetForm(form);

       this.prdLigne.refrechList();

    });
   }
   populateForm(emp : Ligne){
    this.prdLigne.formLigne =Object.assign({},emp);

  }
  updateRecord(form :NgForm){
   this.prdLigne.putLigne(form.value).subscribe(res=>{
    this.resetForm(form);
    this.prdLigne.refrechList();
  });
}

onDe(id_ligne :number){
this.prdLigne.deleteLigne(id_ligne).subscribe(res=>{

this.prdLigne.refrechList();
});
}

}
