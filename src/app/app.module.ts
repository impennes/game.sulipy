import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { MenzaInfoComponent } from './components/altalanos/menza/menza-info/menza-info.component';
import { EtlapComponent } from './components/altalanos/menza/etlap/etlap.component';
import { Gombsor4Component } from './components/gombok/gombsor4/gombsor4.component';
import { LinkekComponent } from './components/linkek/linkek.component';
import { Gombsor2Component } from './components/gombok/gombsor2/gombsor2.component';
import { FooterComponent } from './components/footer/footer.component';
import { BevezetesComponent } from './components/office/bevezetes/bevezetes.component';
import { AdatkezelesComponent } from './components/office/adatkezeles/adatkezeles.component';
import { ImpresszumComponent } from './components/office/impresszum/impresszum.component';
import { NaploComponent } from './components/office/naplo/naplo.component';
import { CookieService } from 'ngx-cookie-service';
import { KezdoknekInfoComponent } from './components/kurzus/kezdoknek/kezdoknek-info/kezdoknek-info.component';
import { ElsoLepesekComponent } from './components/kurzus/kezdoknek/elso-lepesek/elso-lepesek.component';
import { HaladoknakInfoComponent } from './components/kurzus/haladoknak/haladoknak-info/haladoknak-info.component';
import { BevezetesInfoComponent } from './components/kurzus/bevezetes/bevezetes-info/bevezetes-info.component';
import { DemoComponent } from './components/kurzus/bevezetes/demo/demo.component';
import { OnlineComponent } from './components/kurzus/bevezetes/online/online.component';
import { TanaroknakComponent } from './components/kurzus/bevezetes/tanaroknak/tanaroknak.component';
import { StartComponent } from './components/kurzus/haladoknak/start/start.component';
import { FejlesztesAlattComponent } from './components/gombok/fejlesztes-alatt/fejlesztes-alatt.component';
import { FejlesztesDokuComponent } from './components/gombok/fejlesztes-doku/fejlesztes-doku.component';
import { AblakBeallitasComponent } from './components/kurzus/kezdoknek/ablak-beallitas/ablak-beallitas.component';
import { Race01Component } from './components/kurzus/haladoknak/race01/race01.component';
import { Race02Component } from './components/kurzus/haladoknak/race02/race02.component';
import { Race03Component } from './components/kurzus/haladoknak/race03/race03.component';
import { Race04Component } from './components/kurzus/haladoknak/race04/race04.component';

const routes: Routes = [
  {
    path: 'linkek',
    component: LinkekComponent,
  },
  /* {
    path: 'menza',
    component: MenzaInfoComponent,
  },
  {
    path: 'menza/etlap',
    component: EtlapComponent,
  }, */
  {
    path: 'bevezetes',
    component: BevezetesInfoComponent,
  },
  {
    path: 'bevezetes/turtledemo',
    component: DemoComponent,
  },
  {
    path: 'bevezetes/online',
    component: OnlineComponent,
  },
  {
    path: 'bevezetes/tanaroknak',
    component: TanaroknakComponent,
  },
  {
    path: 'kezdoknek',
    component: KezdoknekInfoComponent,
  },
  {
    path: 'kezdoknek/elso-lepesek',
    component: ElsoLepesekComponent,
  },
  {
    path: 'kezdoknek/ablak-beallitas',
    component: AblakBeallitasComponent,
  },
  {
    path: 'haladoknak',
    component: HaladoknakInfoComponent,
  },
  {
    path: 'haladoknak/start',
    component: StartComponent,
  },
  {
    path: 'haladoknak/ablak-beallitas',
    component: AblakBeallitasComponent,
  },
  {
    path: 'haladoknak/race01',
    component: Race01Component,
  },
  {
    path: 'haladoknak/race02',
    component: Race02Component,
  },
  {
    path: 'haladoknak/race03',
    component: Race03Component,
  },
  {
    path: 'haladoknak/race04',
    component: Race04Component,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'footer/impresszum',
    component: ImpresszumComponent,
  },
  {
    path: 'footer/bemutatkozas',
    component: BevezetesComponent,
  },
  {
    path: 'footer/naplo',
    component: NaploComponent,
  },
  {
    path: 'footer/tanaroknak',
    component: TanaroknakComponent,
  },
  {
    path: 'footer/adatkezeles',
    component: AdatkezelesComponent,
  },
  { path: '', component: HomeComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    PageNotFoundComponent,
    HomeComponent,
    MenzaInfoComponent,
    EtlapComponent,
    Gombsor4Component,
    LinkekComponent,
    Gombsor2Component,
    FooterComponent,
    BevezetesComponent,
    AdatkezelesComponent,
    ImpresszumComponent,
    NaploComponent,
    KezdoknekInfoComponent,
    ElsoLepesekComponent,
    HaladoknakInfoComponent,
    BevezetesInfoComponent,
    DemoComponent,
    OnlineComponent,
    TanaroknakComponent,
    StartComponent,
    FejlesztesAlattComponent,
    FejlesztesDokuComponent,
    AblakBeallitasComponent,
    Race01Component,
    Race02Component,
    Race03Component,
    Race04Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    LayoutModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
