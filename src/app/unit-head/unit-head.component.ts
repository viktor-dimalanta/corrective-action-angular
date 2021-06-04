import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-unit-head',
  templateUrl: './unit-head.component.html',
  styleUrls: ['./unit-head.component.css']
})

  export class UnitHeadComponent implements OnInit, OnDestroy {

    bodyClasses = 'skin-blue sidebar-mini';
    body: HTMLBodyElement = document.getElementsByTagName('body')[0];

    constructor() { }

    ngOnInit() {
      // add the the body classes
      this.body.classList.add('skin-blue');
      this.body.classList.add('sidebar-mini');
    }

     ngOnDestroy() {
      // remove the the body classes
      this.body.classList.remove('skin-blue');
      this.body.classList.remove('sidebar-mini');
    }

  }
