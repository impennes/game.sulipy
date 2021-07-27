import { Injectable, EventEmitter } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  isSmallDevice: boolean = false;
  breakpointChangeEvent = new EventEmitter<boolean>();

  constructor(public breakpointObserver: BreakpointObserver) {}

  // a kepernyomeret-valtozasait koveti nyomon, de az applikacio elindulasakor kesik ...
  deviceChange() {
    this.breakpointObserver
      .observe(['(max-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSmallDevice = true;
          this.breakpointChangeEvent.emit(this.isSmallDevice);
        } else {
          this.isSmallDevice = false;
          this.breakpointChangeEvent.emit(this.isSmallDevice);
        }
      });
  }
}
