import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../service/equipe.service';
import { NgForm } from '@angular/forms';
import { Equipe } from '../model/Equipe';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddequipeComponent } from './addequipe/addequipe.component';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  p: number =1;

  constructor(private prdEquipe :EquipeService ,  private dialog : MatDialog) { }

  ngOnInit() {

    this.prdEquipe.refrechList();
    this.resetForm();

  }
  onCreate(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(AddequipeComponent,dialogConfig);
  }

  onEdit(emp: Equipe){



    this.prdEquipe.formEquipe =Object.assign({},emp);

   console.log(emp);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";

    dialogConfig.data=emp;
        const dialogRef=this.dialog.open(AddequipeComponent,dialogConfig);


    dialogRef.afterClosed().subscribe( emp =>{
     this.prdEquipe.list=emp;


    }
  );
  }

  resetForm(form?  :NgForm){
    if(form != null)
    form.resetForm();
    this.prdEquipe.formEquipe={
      id_equipe : null,
      nom_equipe : '',
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
    this.prdEquipe.PostEquipe(form.value).subscribe(res=>{
       this.resetForm(form);

       this.prdEquipe.refrechList();

    });
   }
   populateForm(emp : Equipe){
    this.prdEquipe.formEquipe =Object.assign({},emp);

  }
  updateRecord(form :NgForm){
   this.prdEquipe.putEquipe(form.value).subscribe(res=>{
    this.resetForm(form);
    this.prdEquipe.refrechList();
  });
}

onDe(id_equipe :number){
this.prdEquipe.deleteEquipe(id_equipe).subscribe(res=>{

this.prdEquipe.refrechList();
});
}


}
