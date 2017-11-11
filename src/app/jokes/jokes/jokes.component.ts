import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JokesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
