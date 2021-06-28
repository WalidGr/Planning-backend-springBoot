import { Component, OnInit, Inject, inject } from '@angular/core';
import { PlanchargementService } from '../../service/planchargement.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Planchargement } from '../../model/Planchargement';
import { NotificationService } from '../../service/notification.service';


@Component({
  selector: 'app-addplanchargement',
  templateUrl: './addplanchargement.component.html',
  styleUrls: ['./addplanchargement.component.css']
})
export class AddplanchargementComponent implements OnInit {
emp: Planchargement;



  constructor
  (private prdPlan :PlanchargementService ,
    public dialogRef: MatDialogRef<AddplanchargementComponent>,
    @Inject( MAT_DIALOG_DATA ) public data: any  ) {
      console.log(this.data);

      this.emp=this.data;

     }

    ngOnInit() {

      this.prdPlan.refrechList();
      this.resetForm();


    }




    resetForm(form?  :NgForm){
      if(form != null)
      form.resetForm();
      this.prdPlan.formaPlans={
        id_planchargement : null,
        nom_planchargement : '',
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
      this.prdPlan.PostPlan(form.value).subscribe(res=>{
         this.resetForm(form);

         this.prdPlan.refrechList();

      });
     }

    updateRecord(form :NgForm){
     this.prdPlan.putPlan(form.value).subscribe(res=>{
      this.resetForm(form);
      this.prdPlan.refrechList();
    });
  }

  onDe(id_planchargement :number){
  this.prdPlan.deletePlan(id_planchargement).subscribe(res=>{

  this.prdPlan.refrechList();
  });
  }

  onClose(){

    this.dialogRef.close();
  }

}
