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
import { BevezetesInfoComponent } from './components/kurzus/bevezetes/bevezetes-info/bevezetes-info.component';
import { FejlesztesAlattComponent } from './components/gombok/fejlesztes-alatt/fejlesztes-alatt.component';
import { FejlesztesDokuComponent } from './components/gombok/fejlesztes-doku/fejlesztes-doku.component';
import { GombsorTesztComponent } from './components/gombok/gombsor-teszt/gombsor-teszt.component';
import { AlapokInfoComponent } from './components/kurzus/alapok/alapok-info/alapok-info.component';
import { ElsoProgramComponent } from './components/kurzus/alapok/elso-program/elso-program.component';
import { SzinkezelesComponent } from './components/kurzus/alapok/szinkezeles/szinkezeles.component';
import { RajzolasComponent } from './components/kurzus/alapok/rajzolas/rajzolas.component';
import { Gombsor3Component } from './components/gombok/gombsor3/gombsor3.component';
import { AnimacioInfoComponent } from './components/kurzus/animacio/animacio-info/animacio-info.component';
import { MozgasComponent } from './components/kurzus/animacio/mozgas/mozgas.component';
import { KepComponent } from './components/kurzus/animacio/kep/kep.component';
import { RectComponent } from './components/kurzus/animacio/rect/rect.component';
import { MozgasfazisokComponent } from './components/kurzus/animacio/mozgasfazisok/mozgasfazisok.component';
import { KezdesComponent } from './components/kurzus/bevezetes/kezdes/kezdes.component';

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
    path: 'bevezetes/kezdes',
    component: KezdesComponent,
  },
  {
    path: 'alapok',
    component: AlapokInfoComponent,
  },
  {
    path: 'alapok/elso_program',
    component: ElsoProgramComponent,
  },
  {
    path: 'alapok/szinkezeles',
    component: SzinkezelesComponent,
  },
  {
    path: 'alapok/rajzolas',
    component: RajzolasComponent,
  },
  {
    path: 'animacio',
    component: AnimacioInfoComponent,
  },
  {
    path: 'animacio/mozgas',
    component: MozgasComponent,
  },
  {
    path: 'animacio/kep',
    component: KepComponent,
  },
  {
    path: 'animacio/rect',
    component: RectComponent,
  },
  {
    path: 'animacio/mozgasfazisok',
    component: MozgasfazisokComponent,
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
    BevezetesInfoComponent,
    FejlesztesAlattComponent,
    FejlesztesDokuComponent,
    GombsorTesztComponent,
    AlapokInfoComponent,
    ElsoProgramComponent,
    SzinkezelesComponent,
    RajzolasComponent,
    Gombsor3Component,
    AnimacioInfoComponent,
    MozgasComponent,
    KepComponent,
    RectComponent,
    MozgasfazisokComponent,
    KezdesComponent,
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
