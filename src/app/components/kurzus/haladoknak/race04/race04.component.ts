import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HighlightService } from './../../../../services/highlight.service';

@Component({
  selector: 'app-race04',
  templateUrl: './race04.component.html',
  styleUrls: ['./race04.component.css'],
})
export class Race04Component implements OnInit, AfterViewChecked {
  highlighted: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private highlightService: HighlightService
  ) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  receiveMessage(gombNev) {
    var tabcontent, i;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(gombNev).style.display = 'block';
    this.router.navigate(['haladoknak', 'race04'], {
      queryParams: { tab: gombNev },
    });
  }
}
