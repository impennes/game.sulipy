import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tanaroknak',
  templateUrl: './tanaroknak.component.html',
  styleUrls: ['./tanaroknak.component.css'],
})
export class TanaroknakComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toggleSubmenu(e) {
    //valasztott submenu meghatarozasa
    let clickedItem;
    if (e.target.classList.contains('fas'))
      clickedItem = e.target.parentElement.parentElement;
    else clickedItem = e.target.parentElement;

    //ha valasztott submenu csukva volt
    if (
      clickedItem.querySelector('span') &&
      clickedItem.querySelector('span').classList.contains('fa-angle-right')
    ) {
      clickedItem
        .querySelector('span')
        .classList.replace('fa-angle-right', 'fa-angle-down');
      clickedItem.querySelector('.toggle-content').classList.add('on');
    } else {
      clickedItem
        .querySelector('span')
        .classList.replace('fa-angle-down', 'fa-angle-right');
      clickedItem.querySelector('.toggle-content').classList.remove('on');
    }
  }
}
