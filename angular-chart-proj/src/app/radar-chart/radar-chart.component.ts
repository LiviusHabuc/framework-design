import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [],
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.css'
})
export class RadarChartComponent implements OnInit {
  public chart: any;

  constructor() {
  }

  ngOnInit(): void {
    this.createRadarChart();
  }

  createRadarChart() {
    this.chart = new Chart("radar-chart", {
      type: "radar",
      data: {
        labels: [
          "Speed",
          "Strength",
          "Agility",
          "Endurance",
          "Accuracy",
        ],
        datasets: [
          {
            label: "Player 1",
            data: [95, 70, 60, 88, 92],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          {
            label: 'Player 2',
            data: [65, 85, 90, 72, 80],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
