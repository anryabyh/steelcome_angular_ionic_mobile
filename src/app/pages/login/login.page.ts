import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from 'src/app/config/auth-constants';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  public postData = {
    phone: '',
    password: '',
  }

  // phone='';
  // password='';


  constructor(private httpService: HttpService, private router: Router, private authService: AuthService, private storageService: StorageService) { }


  ngOnInit() {
  }

  validateInputs() {

    let phone = this.postData.phone.trim();
    let password = this.postData.password.trim();
    // console.log(password)
    // console.log(phone)
    return (this.postData.phone && this.postData.password && phone.length >= 11 && password.length > 0)
  }

  auth() {
    if(this.validateInputs()){
      console.log(this.validateInputs())
      this.authService.login(this.postData).subscribe(async (value:any)=>{
        console.log("value="+JSON.stringify(value));
       if(value){
       let res = await this.storageService.store(AuthConstants.AUTH, value)
       console.log(res);

        this.router.navigate(['home']);
       } else{
        console.log('Не то')
       }
      },
      (error:any)=>{
        console.log("Системная ошибка");
      }
      )
    }
    else{
      console.log("Неверные логин или пароль");
      }
    }
  // auth() {
  //   let postData = new FormData()
  //   postData.append('password', this.password)
  //   postData.append('phone', this.phone)
  //   console.log("Pass:", this.password, "\nPhone: ", this.phone);
  //   this.httpService.post("api/auth", postData).subscribe(date => {
  //     console.log(date);
  //   });
  //   this.httpService.get("https://api.steelcom-jdh.ru/api/ru/catalog", {}).subscribe(date => {
  //     console.log(date);
  //   });
  // }
}
