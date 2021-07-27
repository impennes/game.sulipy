import { SidebarService } from './services/sidebar.service';
import { DeviceService } from './services/device.service';
import { Component, OnDestroy, OnInit, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'suliPY';
  sidebarSubscription: Subscription;
  cookieValue: string;
  expiredDate: Date;

  cookieMessage = 'Ez az oldal sütiket használ';
  cookieDismiss = 'Elfogadom';
  cookieLinkText = 'Tudj meg tobbet!';

  constructor(
    private deviceService: DeviceService,
    private sidebarService: SidebarService,
    private elRef: ElementRef,
    public router: Router,
    private cookieService: CookieService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-YKHFSDGQ35', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }

  ngOnInit() {
    this.deviceService.deviceChange();
    this.sidebarSubscription = this.sidebarService.sidebarSateChangeEvent.subscribe(
      (value: boolean) => {
        if (value) {
          this.elRef.nativeElement.querySelector('article').style.width = '0px';
          this.elRef.nativeElement.querySelector('article').style.padding =
            '0px';
        } else {
          this.elRef.nativeElement.querySelector('article').style.width =
            '940px';
          this.elRef.nativeElement.querySelector('article').style.padding =
            '0px 20px';
        }
      }
    );
    this.cookieValue = this.cookieService.get('cookieconsent');
    if (this.cookieValue === 'allow')
      document.querySelector('.cbox').classList.add('hide');
  }
  ngOnDestroy() {
    this.sidebarSubscription.unsubscribe();
  }
  onClick() {
    this.expiredDate = new Date();
    this.expiredDate.setFullYear(this.expiredDate.getFullYear() + 2);
    console.log(this.expiredDate);
    document.querySelector('.cbox').classList.add('hide');
    this.cookieService.set('cookieconsent', 'allow', this.expiredDate);
  }
}
