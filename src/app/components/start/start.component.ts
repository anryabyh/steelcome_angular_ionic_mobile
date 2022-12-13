import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  navigateToLoginPage(){
    this.router.navigate(['login']);

  }

}
