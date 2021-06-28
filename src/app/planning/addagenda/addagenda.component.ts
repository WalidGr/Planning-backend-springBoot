import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DetaiPlanningService} from '../../service/detai-planning.service';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {CieService} from '../../service/cie.service';
import {Cie} from '../../model/cie';
import {Detai_planning} from '../../model/Detai_planning';
import {Planning} from '../../model/Planning';
import {PlanningService} from '../../service/planning.service';


@Component({
  selector: 'app-addagenda',
  templateUrl: './addagenda.component.html',
  styleUrls: ['./addagenda.component.css']
})
export class AddagendaComponent implements OnInit {

  planningId;
  data: any;
  cies: Cie [];
  public config: PerfectScrollbarConfigInterface = {};
  private codeProduit;
  private quantite;
  disable = false;
  constructor(private activatedRoute: ActivatedRoute,
              private detailPlanningService: DetaiPlanningService,
              private planningService: PlanningService,
              private cieService: CieService) {

  }

  ngOnInit() {
    this.planningId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getDetail();
    this.getCies();
    this.getPlanning();
  }

  getPlanning() {
    this.planningService.getAllPlanningsID(this.planningId).subscribe(res => {
      const date = new Date();
      if (date.getTime() > new Date(res.date_fin).getTime()) {
        this.disable = true;
      }
    }, ex => console.log(ex));
  }

  getDetail() {
    this.detailPlanningService.getDetail(this.planningId).subscribe(data => {
      this.data = data;
    }, ex => {
      console.log(ex);
    });
  }


  getCies() {
    this.cieService.getAllCie().subscribe(data => {
      this.cies = data;
    }, ex => {
      console.log(ex);
    });
  }

  customCompareHobby(o1: Cie, o2: Cie) {
    if (o1 && o2) {
      return o1.id === o2.id;
    }
    return false;
  }

  inputCodeProduit(event) {
    this.codeProduit = event.target.value;
  }

  inputQuantite(event) {
    this.quantite = event.target.value;
  }

  changeCie(event, equipe, ligne, indexJ, cie) {


    const detai = new Detai_planning();
    detai.besoin = this.quantite;
    detai.code_produit = this.codeProduit;
    detai.ligne = ligne;
    const planning = new Planning();
    planning.planning_id = this.planningId;
    detai.planning = planning;
    detai.date = this.data.dates[indexJ];
    detai.equips = equipe;
    detai.cies = cie;

    this.detailPlanningService.save(detai).subscribe(res => {
      console.log(res);
    }, ex => {
      console.log(ex);
    });
  }

  update(ec) {
    //  console.log(JSON.parse(ec.cies));
    console.log(JSON.stringify(ec.cies));
    this.detailPlanningService.save(ec).subscribe(res => {
      this.getDetail();
      console.log(res);
    }, ex => {
      console.log(ex);
    });
  }
}
