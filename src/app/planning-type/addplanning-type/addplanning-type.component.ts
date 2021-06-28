import { Component, OnInit, Inject } from '@angular/core';
import { PlanningTypeService } from '../../service/planning-type.service';
import { NgForm } from '@angular/forms';
import { Planning_type } from '../../model/Planning_type';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addplanning-type',
  templateUrl: './addplanning-type.component.html',
  styleUrls: ['./addplanning-type.component.css']
})
export class AddplanningTypeComponent implements OnInit {
emp:Planning_type;
  constructor(private prdPlanning_type :PlanningTypeService,  private dialog : MatDialog, public dialogRef: MatDialogRef<AddplanningTypeComponent>
    ,@Inject( MAT_DIALOG_DATA ) public data: any) {
      console.log(this.data);

      this.emp=this.data;
     }

     onClose(){

      this.dialogRef.close();
    }


  ngOnInit() {

    this.prdPlanning_type.refrechList();
    this.resetForm();

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

    this.onClose();

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
