import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-sleeper-page',
  templateUrl: './type-sleeper-page.component.html',
  styleUrls: ['./type-sleeper-page.component.scss']
})
export class TypeSleeperPageComponent implements OnInit {
  sleeptype;
  sleeptype_text;
  sleeptype_image;
  constructor() { }

  ngOnInit() {
    this.getQuizResults();
  }

  getQuizResults() {
    this.sleeptype = localStorage.getItem('user_sleeptype');
    this.sleeptype_text = localStorage.getItem('user_sleeptype_text');
    this.sleeptype_image = localStorage.getItem('user_sleeptype_image');
  }

}
