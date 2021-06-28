import { Component, OnInit } from '@angular/core';
import { CieService } from '../service/cie.service';
import { NgForm } from '@angular/forms';
import { Cie } from '../model/cie';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddcieComponent } from './addcie/addcie.component';

@Component({
  selector: 'app-cie',
  templateUrl: './cie.component.html',
  styleUrls: ['./cie.component.css']
})
export class CieComponent implements OnInit {
  p: number =1;
plachargemets :any ;
  constructor(private prdCie :CieService,private toastr : ToastrService,  private dialog : MatDialog) { }

  ngOnInit() {
    this.getPlanchargement();
    this.resetForm();
    this.prdCie.refrechList();
  }
  onCreate(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(AddcieComponent,dialogConfig);
  }

  onEdit(emp: Cie){



    this.prdCie.formData =Object.assign({},emp);

   console.log(emp);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";

    dialogConfig.data=emp;
        const dialogRef=this.dialog.open(AddcieComponent,dialogConfig);


    dialogRef.afterClosed().subscribe( emp =>{
     this.prdCie.list=emp;


    }
  );
  }

  resetForm(form?  :NgForm){
    if(form != null)
    form.resetForm();
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

    if(form.value.id==null)
    this.insertRecord(form);

    else
    this.updateRecord(form);


  }

  insertRecord(form :NgForm){
    this.prdCie.PostCie(form.value).subscribe(res=>{
       this.resetForm(form);

       this.prdCie.refrechList();

    });
   }

  updateRecord(form :NgForm){
   this.prdCie.putCie(form.value).subscribe(res=>{
    this.resetForm(form);
    this.prdCie.refrechList();
  });
}

onDe(id :number){
this.prdCie.deleteCie(id).subscribe(res=>{

this.prdCie.refrechList();
});
}

}
