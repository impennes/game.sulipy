import { SidebarService } from './../../services/sidebar.service';
import { DeviceService } from './../../services/device.service';
import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { __classPrivateFieldSet } from 'tslib';
import { Subscription } from 'rxjs';
import {
  NavigationStart,
  Event as NavigationEvent,
  NavigationEnd,
} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  activeItem: any;
  submenus: any;
  isAllSubmenuOpen: boolean = false;
  isSmallDevice: boolean;
  deviceSubscription: Subscription;
  sidebarSubscription: Subscription;
  routerEvents1Subscription: Subscription;
  routerEvents2Subscription: Subscription;
  sidebarMobileOn: boolean = false;
  currentUrl: string = null;
  headMenus: any;
  toggleText: string = 'nyitása';

  constructor(
    private elRef: ElementRef,
    private router: Router,
    private route: ActivatedRoute,
    private deviceService: DeviceService,
    private sidebarService: SidebarService
  ) {}
  ngOnInit(): void {
    if (
      (window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth) < 900
    )
      this.isSmallDevice = true;
    this.deviceSubscription = this.deviceService.breakpointChangeEvent.subscribe(
      (value: boolean) => {
        this.isSmallDevice = value;
      }
    );
    this.sidebarSubscription = this.sidebarService.sidebarSateChangeEvent.subscribe(
      (value: boolean) => {
        this.sidebarMobileOn = value;
        if (value) {
          setTimeout(() => {
            this.openAll();
            console.log(this.elRef.nativeElement.querySelectorAll('.submenu'));
          }, 200);
        }
      }
    );
    this.routerEvents1Subscription = this.router.events.subscribe(
      (event: NavigationEvent) => {
        if (event instanceof NavigationStart) {
          if (this.sidebarMobileOn) {
            this.sidebarService.closeSidebar();
            this.sidebarService.hamburgerSynchronizer();
          }
        }
      }
    );
    this.routerEvents2Subscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        //fomenu meghatarozasa, menuHead = fomenu <a> eleme
        this.currentUrl = event.url;
        console.log('CURRENT: ' + this.currentUrl);
        var menuHead;
        if (this.currentUrl.lastIndexOf('/') != 0)
          menuHead = this.currentUrl.substring(
            0,
            this.currentUrl.lastIndexOf('/')
          );
        else if (this.currentUrl.includes('puska')) menuHead = '/puska';
        else menuHead = this.currentUrl;
        console.log('MENU: ' + menuHead);
        //minden fomenu bezarasa
        this.clearAll();
        //fomenu kinyitasa
        if (menuHead == '/footer') console.log('footer-menu');
        else if (
          document
            .querySelector('a[routerLink="' + menuHead + '"]')
            .parentElement.querySelector('.submenu') &&
          menuHead != '/home'
        ) {
          document
            .querySelector('a[routerLink="' + menuHead + '"]')
            .parentElement.querySelector('.submenu')
            .classList.add('on');
          document
            .querySelector('a[routerLink="' + menuHead + '"]')
            .querySelector('span')
            .classList.replace('fa-angle-right', 'fa-angle-down');
        }
        //queryParams link kijelölése
        if (this.currentUrl.includes('?')) {
          var submenu = this.currentUrl.substring(
            0,
            this.currentUrl.lastIndexOf('?')
          );
          document
            .querySelector('a[routerLink="' + submenu + '"]')
            .classList.add('active');
        }
      });
  }
  ngOnDestroy() {
    this.deviceSubscription.unsubscribe();
    this.sidebarSubscription.unsubscribe();
    this.routerEvents1Subscription.unsubscribe();
    this.routerEvents2Subscription.unsubscribe();
  }

  clearAll() {
    this.headMenus = document.querySelectorAll('.menu-head');
    for (var i = 0; i < this.headMenus.length; i++) {
      if (
        this.headMenus[i]
          .querySelector('span')
          .classList.contains('fa-angle-down')
      )
        this.headMenus[i]
          .querySelector('span')
          .classList.replace('fa-angle-down', 'fa-angle-right');
      this.headMenus[i].parentElement.parentElement
        .querySelector('ul')
        .classList.remove('on');
    }
    this.deleteActive();
  }
  deleteActive() {
    var aTags = document.querySelectorAll('a');
    for (var i = 0; i < aTags.length; i++) {
      if (aTags[i].classList.contains('active'))
        aTags[i].classList.remove('active');
    }
  }

  //minen almenut kinyit
  openAll() {
    this.submenus = this.elRef.nativeElement.querySelectorAll('.submenu');
    this.submenus.forEach((element) => {
      element.classList.add('on');
      element.parentElement
        .querySelector('span')
        .classList.replace('fa-angle-right', 'fa-angle-down');
    });
    this.toggleText = 'zárása';
  }
  //minden almenut bezar
  closeAll() {
    this.submenus = this.elRef.nativeElement.querySelectorAll('.submenu');
    this.submenus.forEach((element) => {
      element.classList.remove('on');
      element.parentElement
        .querySelector('span')
        .classList.replace('fa-angle-down', 'fa-angle-right');
    });
    this.router.navigate(['/home']);
    this.toggleText = 'nyitása';
  }

  //osszes almenu nyitasa/zarasa gombhoz
  toggle() {
    if (!this.isAllSubmenuOpen) this.openAll();
    else window.location.reload();
    // this.closeAll();
    this.isAllSubmenuOpen = !this.isAllSubmenuOpen;
  }
}
