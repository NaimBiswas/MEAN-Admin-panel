import { Component, OnInit } from '@angular/core';
import { Chart, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip, registerables} from 'chart.js';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public chart: any;
  constructor() { 
    Chart.register(...registerables, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip);
   }

  ngOnInit(): void {
    Chart.defaults.color = "#F1F1F1";
    Chart.defaults.borderColor = "#878585";
    this.singleLineChart()
    this.multiLineChart()
    this.MultipleBarChart()
    this.singleBarChar()
    this.pieChart()
    this.doughChart()
  }
  singleLineChart = () => {
    this.chart = new Chart("line-chart", {
      type: 'line',

      data: {
        labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
        datasets: [{
            label: "Salse",
            fill: false,
            backgroundColor: "rgba(235, 22, 22, .7)",
            hoverBackgroundColor:"#fff",
            data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15],
        }]
    },
    options: {
        responsive: true
    }
      
    });
  }
  multiLineChart () {
    var myChart2 = new Chart("salse-revenue", {
      type: "line",
      data: {
          labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
          datasets: [{
                  label: "Salse",
                  data: [15, 30, 55, 45, 70, 65, 85],
                  backgroundColor: "rgba(235, 22, 22, .7)",
                  fill: true
              },
              {
                  label: "Revenue",
                  data: [99, 135, 170, 130, 190, 180, 270],
                  backgroundColor: "rgba(235, 22, 22, .5)",
                  fill: true
              }
          ]
          },
      options: {
          responsive: true
      }
  });
  }
  MultipleBarChart () {
    new Chart("worldwide-sales", {
      type: "bar",
      data: {
          labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
          datasets: [{
                  label: "USA",
                  data: [15, 30, 55, 65, 60, 80, 95],
                  backgroundColor: "rgba(235, 22, 22, .7)"
              },
              {
                  label: "UK",
                  data: [8, 35, 40, 60, 70, 55, 75],
                  backgroundColor: "rgba(235, 22, 22, .5)"
              },
              {
                  label: "AU",
                  data: [12, 25, 45, 55, 65, 70, 60],
                  backgroundColor: "rgba(235, 22, 22, .3)"
              }
          ]
          },
      options: {
          responsive: true
      }
    });
  }
  singleBarChar () {
    new Chart("bar-chart", {
      type: "bar",
      data: {
          labels: ["Italy", "France", "Spain", "USA", "Argentina"],
          datasets: [{
              backgroundColor: [
                  "rgba(235, 22, 22, .7)",
                  "rgba(235, 22, 22, .6)",
                  "rgba(235, 22, 22, .5)",
                  "rgba(235, 22, 22, .4)",
                  "rgba(235, 22, 22, .3)"
              ],
              data: [55, 49, 44, 24, 15]
          }]
      },
      options: {
          responsive: true
      }
    });
  }
  pieChart () {
    new Chart("pie-chart", {
      type: "pie",
      data: {
          labels: ["Italy", "France", "Spain", "USA", "Argentina"],
          datasets: [{
              backgroundColor: [
                  "rgba(235, 22, 22, .7)",
                  "rgba(235, 22, 22, .6)",
                  "rgba(235, 22, 22, .5)",
                  "rgba(235, 22, 22, .4)",
                  "rgba(235, 22, 22, .3)"
              ],
              data: [55, 49, 44, 24, 15]
          }]
      },
      options: {
          responsive: true
      }
  });
  }

  doughChart ()  {
    new Chart("doughnut-chart", {
      type: "doughnut",
      data: {
          labels: ["Italy", "France", "Spain", "USA", "Argentina"],
          datasets: [{
              backgroundColor: [
                  "rgba(235, 22, 22, .7)",
                  "rgba(235, 22, 22, .6)",
                  "rgba(235, 22, 22, .5)",
                  "rgba(235, 22, 22, .4)",
                  "rgba(235, 22, 22, .3)"
              ],
              data: [55, 49, 44, 24, 15]
          }]
      },
      options: {
          responsive: true
      }
  });
  }

}
