import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from './service/auth-guard.service';
import {CieComponent} from './cie/cie.component';
import {PlanchargementComponent} from './planchargement/planchargement.component';
import {LigneComponent} from './ligne/ligne.component';
import {EquipeComponent} from './equipe/equipe.component';
import {PlanningTypeComponent} from './planning-type/planning-type.component';
import {PlanningComponent} from './planning/planning.component';
import {StockMagasinComponent} from './stock-magasin/stock-magasin.component';
import {ConfigurationComponent} from './configuration/configuration.component';
import {UsersComponent} from './users/users.component';
import {BienvenueComponent} from './bienvenue/bienvenue.component';
import {AddplanchargementComponent} from './planchargement/addplanchargement/addplanchargement.component';
import {AddagendaComponent} from './planning/addagenda/addagenda.component';
import {LayoutComponent} from './layout/layout.component';
import {ChartplanningComponent} from './chartplanning/chartplanning.component';
import {ChartLigneComponent} from './chart-ligne/chart-ligne.component';
import {ChartProduittotComponent} from './chart-produittot/chart-produittot.component';
import {ChartacceilComponent} from './chartacceil/chartacceil.component';
import {ProfileComponent} from './profile/profile.component';
import {ContactComponent} from './contact/contact.component';
import {ChartEquipeComponent} from './chart-equipe/chart-equipe.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuardService], children: [
      {path: 'cie', component: CieComponent},
      {path: 'plan', component: PlanchargementComponent},
      {path: 'ligne', component: LigneComponent},
      {path: 'equipe', component: EquipeComponent},
      {path: 'plann_type', component: PlanningTypeComponent},
      {path: 'planning', component: PlanningComponent},
      {path: 'planning/:id', component: AddagendaComponent},
      {path: 'Stock_magasin', component: StockMagasinComponent},
      {path: 'Config', component: ConfigurationComponent},
      {path: 'user', component: UsersComponent},
      {path: 'bienvenue', component: BienvenueComponent},
      {path: 'listplan', component: AddplanchargementComponent},
      {path: 'chartplanning', component: ChartplanningComponent},
      {path: 'chartligne', component: ChartLigneComponent},
      {path: 'chartproduit', component: ChartProduittotComponent},
      {path: 'chartA', component: ChartacceilComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'chartequipe', component: ChartEquipeComponent},
    ]
  },
  {path: 'login', component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
