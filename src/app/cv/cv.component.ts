import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  now: string;
  diff: string;
  constructor() { }

  ngOnInit() {
    moment.locale('fr');
    this.now = moment().format('MMMM YYYY');
    let start = moment('2020 01 01').format('MMMM YYYY');
    let year = moment().diff(start, 'year');
    this.diff = '';
    if (year === 1) {
      this.diff += '1 an';
    }
    if (year > 1) {
      this.diff += year + ' ans';
    }
    let month = moment().diff(start, 'months') % 12;
    if (month !== 0) {
      this.diff += ' et ' + month + ' mois'
    }
  }

}
