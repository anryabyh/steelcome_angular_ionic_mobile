import { Component, OnInit } from '@angular/core';
import axios from 'axios';
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
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  public options: Partial<ChartOptions> | any;
  public radial: Partial<ChartOptions> | any;

  constructor() {
    this.options = {
      series: [],
      chart: {
        type: 'line',
        height: 300,
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000,
          }}}
    };
  }

  ngOnInit() {
    this.spakLine();
    // this.radialChart();
    this.test();
    // this.updateSeries();
  }

  async spakLine() {
    const logs = await this.getLogs(); // Default value for id_machine: 1
    const data = logs.map((log) => ({
      x: new Date(log.time).toLocaleString(),
      y: log.report,
    }));

    console.log(data);

    this.options = {
      chart: {
        type: 'line',
        height: 300,
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000,
          },
        },
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
          data: data,
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

  // radialChart() {
  //   this.radial = {
  //     chart: {
  //       type: 'radialBar',
  //       height: 180,
  //     },
  //     series: [70],
  //     plotOptions: {
  //       radialBar: {
  //         track: {
  //           background: '#c7c7c7',
  //           margin: 0,
  //           strokeWidth: '70%',
  //         },
  //         dataLabels: {
  //           name: {
  //             color: '#fff',
  //             offsetY: -10,
  //             fontSize: '14px',
  //           },
  //           value: {
  //             color: '#fff',
  //             fontSize: '20px',
  //             offsetY: 0,
  //           },
  //         },
  //         hollow: {
  //           size: '65%',
  //         },
  //       },
  //     },
  //     fill: {
  //       colors: ['#fd6585'],
  //     },
  //     labels: ['Загрузка комплекса'],
  //   };
  // }

  async getLogs(id_machine = 1) {
    try {
      const response = await axios.get(
        `https://api-aggregate.s-k56.ru/api/get-logs?id_machine=${id_machine}`
      );
      console.log('Успешный ответ от сервера:', response.data);
      return response.data;
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
      return [];
    }
  }

  async test() {
    setInterval(async () => {
      const logs = await this.getLogs(); // Default value for id_machine: 1
      const sortedLogs = logs.sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime());
      const data = sortedLogs.map((log) => ({
        x: new Date(log.time).toLocaleString(),
        y: log.report,
      }));

      if (this.options) {
        this.options.series = [{ data }];
      }
    }, 1000);
  }
}
