import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-calming-sounds-page',
  templateUrl: './show-calming-sounds-page.component.html',
  styleUrls: ['./show-calming-sounds-page.component.scss']
})
export class ShowCalmingSoundsPageComponent implements OnInit {

  playing: Boolean;

  private stop;
  private fire;
  private garden;
  private rain;
  private seaside;
  private storm;
  private wind;
  constructor() { }

  ngOnInit() {
    this.checkFire();
  }

  /* Fire */
  checkFire() {
    if (!this.playing) { // true
      this.playing = true;
      this.pauseFire();
    } else {
      this.playing = false;
      this.playFire();
    }
  }

  playFire() {
    this.fire = document.getElementById('fire');
    this.fire.load();
    this.fire.play();
  }

  pauseFire() {
    this.fire = document.getElementById('fire');
    this.fire.pause();
    this.fire.currentTime = 0;
  }

  /* Garden */
  playGarden() {
    this.garden = document.getElementById('garden');
    this.garden.load();
    this.garden.play();
  }

  pauseGarden() {
    this.garden = document.getElementById('garden');
    this.garden.pause();
    this.garden.currentTime = 0;
  }

  checkGarden() {
    if (!this.playing) { // true
      this.playing = true;
      this.pauseGarden();
    } else {
      this.playing = false;
      this.playGarden();
    }
  }


  /* Rain */
  playRain() {
    this.rain = document.getElementById('rain');
    this.rain.load();
    this.rain.play();
  }

  pauseRain() {
    this.rain = document.getElementById('rain');
    this.rain.pause();
    this.rain.currentTime = 0;
  }

  checkRain() {
    if (!this.playing) { // true
      this.playing = true;
      this.pauseRain();
    } else {
      this.playing = false;
      this.playRain();
    }
  }

  /* Seaside */
  playSeaSide() {
    this.seaside = document.getElementById('seaside');
    this.seaside.load();
    this.seaside.play();
  }

  pauseSeaSide() {
    this.seaside = document.getElementById('seaside');
    this.seaside.pause();
    this.seaside.currentTime = 0;
  }

  checkSeaSide() {
    if (!this.playing) { // true
      this.playing = true;
      this.pauseSeaSide();
    } else {
      this.playing = false;
      this.playSeaSide();
    }
  }

  /* Storm */
  playStorm() {
    this.storm = document.getElementById('storm');
    this.storm.load();
    this.storm.play();
  }

  pauseStorm() {
    this.storm = document.getElementById('storm');
    this.storm.pause();
    this.storm.currentTime = 0;
  }

  checkStorm() {
    if (!this.playing) { // true
      this.playing = true;
      this.pauseStorm();
    } else {
      this.playing = false;
      this.playStorm();
    }
  }

  /* Wind */
  playWind() {
    this.wind = document.getElementById('wind');
    this.wind.load();
    this.wind.play();
  }

  pauseWind() {
    this.wind = document.getElementById('wind');
    this.wind.pause();
    this.wind.currentTime = 0;
  }

  checkWind() {
    if (!this.playing) { // true
      this.playing = true;
      this.pauseWind();
    } else {
      this.playing = false;
      this.playWind();
    }
  }

  stopAll() {
    this.stop = document.getElementsByTagName('audio'); // Get all audio tags
    for (let i = 0; i < this.stop.length; i++) {
      this.stop[i].pause();
      this.stop[i].currentTime = 0;
    }
  }

}
