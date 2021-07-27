import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from './../../../../services/highlight.service';

@Component({
  selector: 'app-turtle-esemenyek',
  templateUrl: './turtle-esemenyek.component.html',
  styleUrls: ['./turtle-esemenyek.component.css'],
})
export class TurtleEsemenyekComponent implements OnInit, AfterViewChecked {
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
