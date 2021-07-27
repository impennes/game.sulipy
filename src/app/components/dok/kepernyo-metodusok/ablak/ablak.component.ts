import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from './../../../../services/highlight.service';

@Component({
  selector: 'app-ablak',
  templateUrl: './ablak.component.html',
  styleUrls: ['./ablak.component.css'],
})
export class AblakComponent implements OnInit, AfterViewChecked {
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
