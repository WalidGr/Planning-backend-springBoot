import { Component, OnInit, Inject } from '@angular/core';
import { EquipeService } from '../../service/equipe.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Equipe } from '../../model/Equipe';

@Component({
  selector: 'app-addequipe',
  templateUrl: './addequipe.component.html',
  styleUrls: ['./addequipe.component.css']
})
export class AddequipeComponent implements OnInit {
  emp:Equipe;

  constructor(private prdEquipe :EquipeService ,  private dialog : MatDialog,
    public dialogRef: MatDialogRef<AddequipeComponent>,
    @Inject( MAT_DIALOG_DATA ) public data: any) {
      console.log(this.data);

      this.emp=this.data;
    }

  ngOnInit() {

    this.prdEquipe.refrechList();
    this.resetForm();

  }


  onClose(){

    this.dialogRef.close();
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

    this.onClose();
  }

  insertRecord(form :NgForm){
    this.prdEquipe.PostEquipe(form.value).subscribe(res=>{
       this.resetForm(form);

       this.prdEquipe.refrechList();

    });
   }

  updateRecord(form :NgForm){
   this.prdEquipe.putEquipe(form.value).subscribe(res=>{
    this.resetForm(form);
    this.prdEquipe.refrechList();
  });
}

onDe(id_planchargement :number){
this.prdEquipe.deleteEquipe(id_planchargement).subscribe(res=>{

this.prdEquipe.refrechList();
});
}


}
