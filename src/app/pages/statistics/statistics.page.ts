import { Component, OnInit, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from "ng-apexcharts";

export type ChartOptions = {
  chart: ApexChart;
  series: ApexAxisChartSeries | any[];
  stroke: ApexStroke;
  markers: ApexMarkers;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  colors: any[];
  labels: any[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  fill: ApexFill;
  plotOptions: ApexPlotOptions
};

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage  implements OnInit{
  public options: Partial<ChartOptions> | any;
  public radial: Partial<ChartOptions>|any ;
  constructor() {
  }

  ngOnInit(){
    this.spakLine();
    this.radialChart();
    this.test()
    // this.updateSeries();
  }


  spakLine() {
    this.options = {
      chart: {
        type: 'line',
        height: 100,

        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000
          }},


        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },
      series: [
        {
          data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69],
        },

      ],
      stroke: {
        width: 3,
        curve: 'smooth',
      },
      markers: {
        size: 5,
      },
      grid: {
        padding: {
          top: 20,
          left: 110,
          bottom: 10,
        },
      },
    };
  }
  radialChart() {
    this.radial = {
      chart: {
        type: 'radialBar',
        height: 180,
      },
      series: [70],
      plotOptions: {
        radialBar: {
          track: {
            background: '#c7c7c7',
            margin: 0,
            strokeWidth: '70%',
          },
          dataLabels: {
            name: {
              color: '#fff',
              offsetY: -10,
              fontSize: '14px',
            },
            value: {
              color: '#fff',
              fontSize: '20px',
              offsetY: 0,
            },
          },
          hollow: {
            size: '65%',
          },
        },
      },
      fill: {
        colors: ['#fd6585'],
      },
      labels: ['Tasks'],
    };
  }
  removedArr(){
        const removed = this.spakLine;
  }


//   public updateSeries() {
//     setInterval((): void =>{
//       this.updateSeries()
//       }),10000;
//     this.options.series = [{
//         data: [23, 44, 1, 22]
//       }];
// }




test(){
  setInterval( () => {
    // this.options.series[0].data = this.remove(this.options.series[0].data, 0)
    this.options.series[0].data.shift();
    this.options.series[0].data.push(getRandomInt(200))

    console.log("kdlkfsold");
  }, 1000)

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}




// // ?????????????? ?????????????? ?????????????? ???? ???? ??????????????
//   remove(arr, indexes) {
//     var arrayOfIndexes = [].slice.call(arguments, 1)
//     return arr.filter(function (item, index:never) {
//         return arrayOfIndexes.indexOf(index) == -1
//     })
//   }

}





