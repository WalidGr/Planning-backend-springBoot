import { Component, OnInit, Inject } from '@angular/core';
import { CieService } from '../../service/cie.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Cie } from '../../model/cie';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcie',
  templateUrl: './addcie.component.html',
  styleUrls: ['./addcie.component.css']
})
export class AddcieComponent implements OnInit {
  emp: Cie;
  plachargemets :any ;
  constructor(private prdCie :CieService , public dialogRef: MatDialogRef<AddcieComponent>
              ,@Inject( MAT_DIALOG_DATA ) public data: any) {
                console.log(this.data);

                this.emp=this.data;
               }

  ngOnInit() {
    this.getPlanchargement();
    this.resetForm();
    this.prdCie.refrechList();

  }
  onClose(){

    this.dialogRef.close();
  }


  resetForm(form?  :NgForm){
    if(form != null) {
    form.resetForm();
    }
    this.prdCie.formData={
      id : null,
      nom_cie : '',
      id_planchargement: null,
      createdAt:new Date(),
      updatedAt:new Date(),

    }
  }
  getPlanchargement (){
     this.prdCie.getAllPlans().subscribe(res=>{
         console.log(res);
         this.plachargemets=res;
         console.log(this.plachargemets);
     })
  }

  onSubmit(form :NgForm){

    if(form.value.id==null) {
    this.insertRecord(form);
    }

    else {
    this.updateRecord(form);
    }

    this.onClose();

  }

  insertRecord(form :NgForm){
    this.prdCie.PostCie(form.value).subscribe(res=>{
       this.resetForm(form);

       this.prdCie.refrechList();

    });
   }
   populateForm(emp : Cie){
    this.prdCie.formData =Object.assign({},emp);

  }
  updateRecord(form :NgForm){
   this.prdCie.putCie(form.value).subscribe(res=>{
    this.resetForm(form);
    this.prdCie.refrechList();
  });
}
}
