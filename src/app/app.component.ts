import { Component, OnInit, OnDestroy } from '@angular/core';
var result = null;

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  red = 'red';
  blue = 'blue';
  site = 'https://nerf-data-app-api.herokuapp.com/';

  ngOnInit() {this.startTimerInterval();}
  ngOnDestroy() {}

  redClick (event: any) {
    fetch(`{site}/startTimer/Red`)
  };

  blueClick (event: any) {
    fetch('{site}startTimer/Blue');
  };

  resetClick (event: any) {
    fetch('{site}reset');
  };

  private startTimerInterval = () => {
    setInterval(() => {
      fetch('{site}status/')
      .then ((response) => {
        return response.json()
      })
      .then((response) => {
        response.forEach(element => {
          if (element.teamName == 'Red') {
            this.red = `Team ${element.teamName} has controlled for ${element.elapsedTimeInSeconds} seconds!`
          } else {
            this.blue = `Team ${element.teamName} has controlled for ${element.elapsedTimeInSeconds} seconds!`
          }
        });
      })
    }, 1000);
  };
}

