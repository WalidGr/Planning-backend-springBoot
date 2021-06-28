import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {DetaiPlanningService} from '../service/detai-planning.service';

@Component({
  selector: 'app-stock-magasin',
  templateUrl: './stock-magasin.component.html',
  styleUrls: ['./stock-magasin.component.css']
})
export class StockMagasinComponent implements OnInit {
  p = 1;
  listStock: any;
  term: any;

  constructor(private detailPlanningService: DetaiPlanningService,
              private dialog: MatDialog) {
  }

  ngOnInit() {

    this.detailPlanningService.getStock().subscribe(data => {
      this.listStock = data;
    }, ex => console.log(ex));

  }


}
