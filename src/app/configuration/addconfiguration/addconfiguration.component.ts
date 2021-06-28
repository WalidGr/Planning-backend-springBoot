import { Component, OnInit, Inject } from '@angular/core';
import { ConfigurationService } from '../../service/configuration.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Configuration } from '../../model/Configuration';

@Component({
  selector: 'app-addconfiguration',
  templateUrl: './addconfiguration.component.html',
  styleUrls: ['./addconfiguration.component.css']
})
export class AddconfigurationComponent implements OnInit {
emp :Configuration;
  constructor(private prdConf :ConfigurationService ,  private dialog : MatDialog , public dialogRef: MatDialogRef<AddconfigurationComponent>
    ,@Inject( MAT_DIALOG_DATA ) public data: any) {
      console.log(this.data);

      this.emp=this.data;
     }

  ngOnInit() {

    this.resetForm();
    this.prdConf.refrechList();
  }
  onClose(){

    this.dialogRef.close();
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


  onSubmit(form :NgForm){

    if(form.value.id==null)
    this.insertRecord(form);

    else
    this.updateRecord(form);
    this.onClose();

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
