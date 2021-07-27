import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from './../../../../services/highlight.service';

@Component({
  selector: 'app-kepernyo-esemenyek',
  templateUrl: './kepernyo-esemenyek.component.html',
  styleUrls: ['./kepernyo-esemenyek.component.css'],
})
export class KepernyoEsemenyekComponent implements OnInit, AfterViewChecked {
  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}
