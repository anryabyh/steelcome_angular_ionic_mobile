import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private storageServise: StorageService, private router: Router, private authServise: AuthService) { }

  displayUserData: any;
  public postData = {
    phone: '',
    password: '',
  }
  ngOnInit() {
    this.authServise.userData$.subscribe(value => {
      this.displayUserData = value;
    })
  }
  // validateInputs() {

  //   let phone = this.postData.phone.trim();
  //   let password = this.postData.password.trim();
  //   // console.log(password)
  //   // console.log(phone)
  //   return (this.postData.phone && this.postData.password && phone.length >= 11 && password.length > 0)
  // }

  logoutAuthClear() {
    // if (this.validateInputs()) {
    //   this.authServise.logout(this.postData).subscribe((value:any)=>{
    //     console.log("value="+JSON.stringify(value))});
    this.authServise.logoutClear();
  }


}
