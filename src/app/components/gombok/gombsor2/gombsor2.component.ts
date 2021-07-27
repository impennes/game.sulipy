import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gombsor2',
  templateUrl: './gombsor2.component.html',
  styleUrls: ['./gombsor2.component.css'],
})
export class Gombsor2Component implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    var videoButton = document.getElementById('video-gomb');
    videoButton.classList.add('active');
    this.messageEvent.emit('video');

    this.route.queryParams.subscribe((params) => {
      if (params['tab']) {
        this.openTabRoute(params['tab']);
      }
    });
  }

  onClick(evt, gombNev) {
    var buttons, i;
    // Get all elements with class="button" and remove the class "active"
    buttons = document.getElementsByClassName('button');
    for (i = 0; i < buttons.length; i++) {
      buttons[i].className = buttons[i].className.replace(' active', '');
    }
    //Add an "active" class to the current button
    if (evt.target.classList.contains('button'))
      evt.target.classList.add('active');
    if (evt.target.parentElement.classList.contains('button'))
      evt.target.parentElement.classList.add('active');
    else {
      evt.target.parentElement.parentElement.classList.add('active');
    }

    //Emit wich buttons was clicked
    this.messageEvent.emit(gombNev);
  }

  openTabRoute(tab) {
    var buttons, i;
    // Get all elements with class="button" and remove the class "active"
    buttons = document.getElementsByClassName('button');
    for (i = 0; i < buttons.length; i++) {
      buttons[i].className = buttons[i].className.replace(' active', '');
      //Add an "active" class to the current button
      if (buttons[i].id === tab + '-gomb') buttons[i].classList.add('active');
    }
    //Emit wich buttons was clicked
    this.messageEvent.emit(tab);
  }
}
