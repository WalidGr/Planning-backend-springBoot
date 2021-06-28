import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../service/configuration.service';
import { NgForm } from '@angular/forms';
import { Configuration } from '../model/Configuration';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddconfigurationComponent } from './addconfiguration/addconfiguration.component';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  p: number =1;

  constructor(private prdConf :ConfigurationService ,  private dialog : MatDialog) { }

  ngOnInit() {

    this.resetForm();
    this.prdConf.refrechList();
  }



  resetForm(form?  :NgForm){
    if(form != null)
    form.resetForm();
    this.prdConf.formConfiguration={
      id_configuration : null,
      chainecnx : '',
      etat: '',

    }
  }

  onCreate(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(AddconfigurationComponent,dialogConfig);
  }

  onEdit(emp: Configuration){



    this.prdConf.formConfiguration =Object.assign({},emp);

   console.log(emp);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";

    dialogConfig.data=emp;
        const dialogRef=this.dialog.open(AddconfigurationComponent,dialogConfig);


    dialogRef.afterClosed().subscribe( emp =>{
     this.prdConf.list=emp;


    }
  );
  }

  onSubmit(form :NgForm){

    if(form.value.id==null)
    this.insertRecord(form);

    else
    this.updateRecord(form);


  }

  insertRecord(form :NgForm){
    this.prdConf.PostConfiguration(form.value).subscribe(res=>{
       this.resetForm(form);

       this.prdConf.refrechList();

    });
   }
   populateForm(emp : Configuration){
    this.prdConf.formConfiguration =Object.assign({},emp);

  }
  updateRecord(form :NgForm){
   this.prdConf.putConfiguration(form.value).subscribe(res=>{
    this.resetForm(form);
    this.prdConf.refrechList();
  });
}

onDe(id_configuration :number){
this.prdConf.deleteConfiguration(id_configuration).subscribe(res=>{

this.prdConf.refrechList();
});
}

}
