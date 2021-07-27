import { SidebarService } from './../../services/sidebar.service';
import { DeviceService } from './../../services/device.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isSmallDevice: boolean;
  deviceSubscription: Subscription;
  hamburgerSubscription: Subscription;
  hamburgerActive: boolean = false;

  constructor(
    private deviceService: DeviceService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    if (
      (window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth) < 900
    )
      this.isSmallDevice = true;
    this.deviceSubscription = this.deviceService.breakpointChangeEvent.subscribe(
      (value) => {
        this.isSmallDevice = value;
      }
    );
    this.hamburgerSubscription = this.sidebarService.hamburgerClickEvent.subscribe(
      () => {
        this.hamburgerActive = !this.hamburgerActive;
      }
    );
  }
  ngOnDestroy() {
    this.deviceSubscription.unsubscribe();
    this.hamburgerSubscription.unsubscribe();
  }
  toggleSidebar() {
    console.log('toggleSidebar running');
    if (!this.hamburgerActive) this.sidebarService.openSidebar();
    else this.sidebarService.closeSidebar();
    this.hamburgerActive = !this.hamburgerActive;
  }
}
