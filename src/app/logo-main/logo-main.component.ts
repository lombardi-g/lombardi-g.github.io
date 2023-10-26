import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-main',
  templateUrl: './logo-main.component.html',
  styleUrls: ['./logo-main.component.css']
})
export class LogoMainComponent {
  barAnimationDuration(index: number): string {
    // Animations durations
    const durations = ['4s', '7s', '8s', '3s', '5.5s'];
    return durations[index - 1] || '1s';
  }
  barInitialHeights(index: number): number {
    // Setting different initial heights for each bar
    const initialHeights = [30,60,80,20,70];
    return initialHeights[index - 1] || 50;
  }

}