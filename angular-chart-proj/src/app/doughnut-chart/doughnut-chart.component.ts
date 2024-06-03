import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.css'
})
export class DoughnutChartComponent implements OnInit {
  public chart: any;

  constructor() {
  }

  ngOnInit(): void {
    this.createDoughnutChart();
  }

  createDoughnutChart() {
    this.chart = new Chart("doughnut-chart", {
      type: "doughnut",
      data: {
        labels: [
          "Toyota",
          "Volkswagen",
          "Ford",
          "Honda",
          "BMW",
          "Nissan",
          "Hyundai",
          "Chevrolet",
          "Mercedes",
          "Kia"
        ],
        datasets: [
          {
            label: "Market share of car brands",
            data: [14, 13, 10, 9, 8, 7, 6, 6, 5, 5],
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF9F40",
              "#4BC0C0",
              "#9966FF",
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF9F40"
            ],
            hoverOffset: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
