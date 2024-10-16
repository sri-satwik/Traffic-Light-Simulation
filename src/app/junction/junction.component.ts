import { Component, OnInit } from '@angular/core';
import { interval, timer, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-junction',
  templateUrl: './junction.component.html',
  styleUrls: ['./junction.component.css']
})
export class JunctionComponent implements OnInit {
  currentLight: string = 'green-bottom';
  greenDuration: number = 5;  
  yellowDuration: number = 1;  
  lights: string[] = ['bottom', 'right', 'top', 'left'];  
  currentLightIndex: number = 0;  
  subscription: Subscription = new Subscription();

  constructor() {}

  ngOnInit(): void {
    this.startTrafficSimulation();
  }

  startTrafficSimulation() {
    // Unsubscribe from any previous subscription to avoid multiple intervals
    this.subscription.unsubscribe();

  
    this.subscription = interval((this.greenDuration + this.yellowDuration) * 1000)
      .pipe(
        switchMap(() => {
          this.showYellow();
          return timer(this.yellowDuration * 1000);
        })
      )
      .subscribe(() => {
        this.switchToNextLight();  // Move to the next light
      });
  }

  showYellow() {
    this.currentLight = `yellow-${this.lights[this.currentLightIndex]}`;
  }

  switchToNextLight() {
    this.currentLight = `red-${this.lights[this.currentLightIndex]}`;
    const nextLightIndex = (this.currentLightIndex + 1) % this.lights.length;
    this.currentLight = `yellow-${this.lights[nextLightIndex]}`;
    timer(this.yellowDuration * 1000).subscribe(() => {
      this.currentLight = `green-${this.lights[nextLightIndex]}`;
      this.currentLightIndex = nextLightIndex;
    });
  }

  onDurationChange() {
    this.startTrafficSimulation(); 
  }

  isRed(direction: string): boolean {
    return this.currentLight.indexOf(direction) === -1;
  }
}
