import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from './../../../../services/highlight.service';

@Component({
  selector: 'app-allapot',
  templateUrl: './allapot.component.html',
  styleUrls: ['./allapot.component.css'],
})
export class AllapotComponent implements OnInit, AfterViewChecked {
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
