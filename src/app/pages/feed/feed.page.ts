import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  displayUserData: any;

  constructor(private authServise: AuthService) { }

  ngOnInit() {
    this.authServise.userData$.subscribe(value => {
      this.displayUserData = value;
    })
  }


}
