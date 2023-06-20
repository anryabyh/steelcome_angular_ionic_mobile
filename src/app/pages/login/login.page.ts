// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthConstants } from 'src/app/config/auth-constants';
// import { AuthService } from 'src/app/services/auth.service';
// import { HttpService } from 'src/app/services/http.service';
// import { StorageService } from 'src/app/services/storage.service';
// import { ToastService } from 'src/app/services/toast.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })

// export class LoginPage implements OnInit {
//   public postData = {
//     phone: '',
//     password: '',
//   }

//   // phone='';
//   // password='';


//   constructor(private httpService: HttpService,
//     private router: Router,
//      private authService: AuthService,
//       private storageService: StorageService,
//       private toastServise: ToastService) { }


//   ngOnInit() {
//   }

//   validateInputs() {

//     let phone = this.postData.phone.trim();
//     let password = this.postData.password.trim();
//     // console.log(password)
//     // console.log(phone)
//     return (this.postData.phone && this.postData.password && phone.length >= 11 && password.length > 0)
//   }

//   auth() {
//     if(this.validateInputs()){
//       console.log(this.validateInputs())
//       this.authService.login(this.postData).subscribe(async (value:any)=>{
//         console.log("value="+JSON.stringify(value));
//        if(value){
//        let res = await this.storageService.store(AuthConstants.AUTH, value)
//        console.log(res);

//         this.router.navigate(['home']);
//        } else{
//         this.toastServise.presentToast('Не то')
//        }
//       },
//       (error:any)=>{
//         this.toastServise.presentToast('Системная ошибка');
//       }
//       )
//     }
//     else{
//       this.toastServise.presentToast("Неверные логин или пароль");
//       }
//     }
//   // auth() {
//   //   let postData = new FormData()
//   //   postData.append('password', this.password)
//   //   postData.append('phone', this.phone)
//   //   console.log("Pass:", this.password, "\nPhone: ", this.phone);
//   //   this.httpService.post("api/auth", postData).subscribe(date => {
//   //     console.log(date);
//   //   });
//   //   this.httpService.get("https://api.steelcom-jdh.ru/api/ru/catalog", {}).subscribe(date => {
//   //     console.log(date);
//   //   });
//   // }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from 'src/app/config/auth-constants';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public postData = {
    phone: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit() {}

  validateInputs() {
    const phone = this.postData.phone.trim();
    const password = this.postData.password.trim();
    return (
      this.postData.phone &&
      this.postData.password &&
      phone.length >= 11 &&
      password.length > 0
    );
  }

  async auth() {
    if (this.validateInputs()) {
      try {
        const value = await this.authService.login(this.postData).toPromise();
        console.log('value=' + JSON.stringify(value));
        if (value) {
          await this.storageService.store(AuthConstants.AUTH, value);
          console.log(value);

          this.router.navigate(['home']);
        } else {
          this.toastService.presentToast('Не то');
        }
      } catch (error) {
        this.toastService.presentToast('Системная ошибка');
      }
    } else {
      this.toastService.presentToast('Неверные логин или пароль');
    }
  }
}

