import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {DoughnutChartComponent} from "./doughnut-chart/doughnut-chart.component";
import {RadarChartComponent} from "./radar-chart/radar-chart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DoughnutChartComponent, RadarChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-chart-proj';
}
