import { Component, OnInit, Inject, Input } from '@angular/core';
import { CieService } from '../service/cie.service';
import { Router } from '@angular/router';
import { PlanchargementService } from '../service/planchargement.service';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { Planchargement } from '../model/Planchargement';
import { MatDialog,MatDialogRef, MatDialogConfig,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddplanchargementComponent } from './addplanchargement/addplanchargement.component';
import { NotificationService } from '../service/notification.service';
import * as _ from 'lodash';
import { from } from 'rxjs';



@Component({
  selector: 'app-planchargement',
  templateUrl: './planchargement.component.html',
  styleUrls: ['./planchargement.component.css']
})
export class PlanchargementComponent implements OnInit {
  p: number =1;





  constructor(private prdPlan :PlanchargementService,  private dialog : MatDialog,
    private notificationService: NotificationService) {

     }



  ngOnInit() {

    this.prdPlan.refrechList();
    this.resetForm();


  }

  onCreate(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(AddplanchargementComponent,dialogConfig);
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


  }

  onEdit(emp: Planchargement){



    this.prdPlan.formaPlans =Object.assign({},emp);

   console.log(emp);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";

    dialogConfig.data=emp;
        const dialogRef=this.dialog.open(AddplanchargementComponent,dialogConfig);


    dialogRef.afterClosed().subscribe( emp =>{
     this.prdPlan.list=emp;


    }
  );
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

}
