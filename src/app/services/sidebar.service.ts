import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isSidebarOpen: boolean = false;
  sidebarSateChangeEvent = new EventEmitter<boolean>();
  hamburgerClickEvent = new EventEmitter();

  constructor() {}

  openSidebar() {
    this.isSidebarOpen = true;
    this.sidebarSateChangeEvent.emit(this.isSidebarOpen);
  }

  closeSidebar() {
    this.isSidebarOpen = false;
    this.sidebarSateChangeEvent.emit(this.isSidebarOpen);
  }

  //mobil kepernyon a sidebar vmely menupotjara kattintva a sidebar bezarodik, ezert szukseges nyitott/zart allapotot jelzo ertek aktualizalasa
  hamburgerSynchronizer() {
    this.hamburgerClickEvent.emit();
  }
}
