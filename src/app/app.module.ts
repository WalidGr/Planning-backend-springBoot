import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CieComponent} from './cie/cie.component';
import {PlanchargementComponent} from './planchargement/planchargement.component';
import {LigneComponent} from './ligne/ligne.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {EquipeComponent} from './equipe/equipe.component';
import {ConfigurationComponent} from './configuration/configuration.component';
import {PlanningComponent} from './planning/planning.component';
import {PlanningTypeComponent} from './planning-type/planning-type.component';
import {StockMagasinComponent} from './stock-magasin/stock-magasin.component';
import {UsersComponent} from './users/users.component';
import {BienvenueComponent} from './bienvenue/bienvenue.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AddplanchargementComponent} from './planchargement/addplanchargement/addplanchargement.component';
import {MaterialModule} from './material/material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {OverlayModule} from '@angular/cdk/overlay';
import {AddcieComponent} from './cie/addcie/addcie.component';
import {AddequipeComponent} from './equipe/addequipe/addequipe.component';
import {AddligneComponent} from './ligne/addligne/addligne.component';
import {AddplanningTypeComponent} from './planning-type/addplanning-type/addplanning-type.component';
import {AddplanningComponent} from './planning/addplanning/addplanning.component';
import {AddstockMagasinComponent} from './stock-magasin/addstock-magasin/addstock-magasin.component';
import {AddconfigurationComponent} from './configuration/addconfiguration/addconfiguration.component';
import {AddusersComponent} from './users/addusers/addusers.component';
import {AddagendaComponent} from './planning/addagenda/addagenda.component';
import {DatePipe} from '@angular/common';
import {JwtInterceptorService} from './service/jwt-interceptor.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {NgxNotificationComponent} from 'ngx-notification';
import {NgxPermissionsModule} from 'ngx-permissions';
import { LayoutComponent } from './layout/layout.component';
import {ChartsModule} from 'ng2-charts';
import { ChartplanningComponent } from './chartplanning/chartplanning.component';
import { ChartLigneComponent } from './chart-ligne/chart-ligne.component';
import { ChartEquipeComponent } from './chart-equipe/chart-equipe.component';
import { ChartProduittotComponent } from './chart-produittot/chart-produittot.component';
import { ChartProduitQuantiteComponent } from './chart-produit-quantite/chart-produit-quantite.component';
import {MatPseudoCheckboxModule} from '@angular/material/typings/esm5/core';
import { ChartacceilComponent } from './chartacceil/chartacceil.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: false,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CieComponent,
    PlanchargementComponent,
    LigneComponent,
    EquipeComponent,
    ConfigurationComponent,

    PlanningComponent,
    PlanningTypeComponent,
    StockMagasinComponent,
    UsersComponent,
    BienvenueComponent,
    AddplanchargementComponent,
    AddcieComponent,
    AddequipeComponent,
    AddligneComponent,
    AddplanningTypeComponent,
    AddplanningComponent,
    AddstockMagasinComponent,
    AddconfigurationComponent,
    AddusersComponent,
    AddagendaComponent,
    NgxNotificationComponent,
    LayoutComponent,
    ChartplanningComponent,
    ChartLigneComponent,
    ChartEquipeComponent,
    ChartProduittotComponent,
    ChartProduitQuantiteComponent,
    ChartacceilComponent,
    ProfileComponent,
    ContactComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        Ng2SearchPipeModule,
        NgxPaginationModule,
        MatDialogModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MaterialModule,
        OverlayModule,
        PerfectScrollbarModule,
        NgxPermissionsModule.forRoot(),
        ChartsModule,

    ],
  providers: [DatePipe,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }],
  bootstrap: [AppComponent],
  entryComponents: [AddplanchargementComponent, AddcieComponent, AddequipeComponent
    , AddligneComponent, AddplanningTypeComponent, AddplanningComponent, AddstockMagasinComponent, AddconfigurationComponent
    , AddusersComponent]
})
export class AppModule {
}
