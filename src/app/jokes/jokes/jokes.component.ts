import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { JokesService } from '../jokes.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
  encapsulation: ViewEncapsulation.None,
   providers: [JokesService]
})
export class JokesComponent implements OnInit {

  joke: any;
  constructor(private jokes: JokesService) { }

  ngOnInit() {}

  getRandomJoke() {
    this.jokes.getRandom()
      .subscribe((joke) => this.joke = joke);
  }
}
