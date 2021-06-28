import { Component, OnInit, Inject } from '@angular/core';
import { LigneService } from '../../service/ligne.service';
import { PlanningTypeService } from '../../service/planning-type.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Ligne } from '../../model/Ligne';

@Component({
  selector: 'app-addligne',
  templateUrl: './addligne.component.html',
  styleUrls: ['./addligne.component.css']
})
export class AddligneComponent implements OnInit {

  planning_type :any;
  emp:Ligne;


  constructor(private prdLigne :LigneService, private prdType :PlanningTypeService,  private dialog : MatDialog
    , public dialogRef: MatDialogRef<AddligneComponent>
    ,@Inject( MAT_DIALOG_DATA ) public data: any) {
      console.log(this.data);

      this.emp=this.data;
     }

  ngOnInit() {
    this.getALLPlanning_type();

    this.prdLigne.refrechList();
    this.resetForm();

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
  onClose(){

    this.dialogRef.close();
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

    this.onClose();

  }

  insertRecord(form :NgForm){
    this.prdLigne.PostLigne(form.value).subscribe(res=>{
       this.resetForm(form);

       this.prdLigne.refrechList();

    });
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
