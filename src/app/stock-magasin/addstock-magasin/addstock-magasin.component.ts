import {Component, Inject, OnInit} from '@angular/core';
import {StockMagasinService} from '../../service/stockMagasin.service';
import {PlanningService} from '../../service/planning.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {StockMagasin} from '../../model/StockMagasin';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addstock-magasin',
  templateUrl: './addstock-magasin.component.html',
  styleUrls: ['./addstock-magasin.component.css']
})
export class AddstockMagasinComponent implements OnInit {
  plannings: any;
  stockMagasin: StockMagasin = new StockMagasin();

  constructor(private Stockservice: StockMagasinService, private prdPlanning: PlanningService,
              private dialog: MatDialog,
              public dialogRef: MatDialogRef<AddstockMagasinComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.getPlanning();
    this.Stockservice.refrechList();
  }

  onClose() {

    this.dialogRef.close();
  }


  getPlanning() {
    this.prdPlanning.getAllPlanning().subscribe(res => {
      console.log(res);
      this.plannings = res;
      console.log(this.plannings);
    });
  }

  onSubmit(form: NgForm) {

    if (form.value.id == null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }

    this.onClose();

  }

  insertRecord(form: NgForm) {
    this.Stockservice.PostStock_magasin(form.value).subscribe(res => {

      this.Stockservice.refrechList();

    });
  }

  updateRecord(form: NgForm) {
    this.Stockservice.putStock_magasin(form.value).subscribe(res => {
      this.Stockservice.refrechList();
    });
  }


}
