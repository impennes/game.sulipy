import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from './../../../../services/highlight.service';

@Component({
  selector: 'app-szinbeallitas',
  templateUrl: './szinbeallitas.component.html',
  styleUrls: ['./szinbeallitas.component.css'],
})
export class SzinbeallitasComponent implements OnInit, AfterViewChecked {
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
