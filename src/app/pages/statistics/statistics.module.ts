import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatisticsPageRoutingModule } from './statistics-routing.module';

import { StatisticsPage } from './statistics.page';
import { NgApexchartsModule } from "ng-apexcharts";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatisticsPageRoutingModule,
    NgApexchartsModule
  ],
  declarations: [StatisticsPage]
})
export class StatisticsPageModule { }
