import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthConstants } from '../config/auth-constants';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData$ = new BehaviorSubject<any>('');

  constructor(private httpService: HttpService, private storageService: StorageService, private router: Router) { }
  //Авторизация
  login(data: any): Observable<any> {
    return this.httpService.post('api/auth', data);
  }
  //Регистрация
  signup(data: any): Observable<any> {
    return this.httpService.post('api/registration', data);
  }
  //Выход при помощи удаления токена с сервера(НЕ ИСПОЛЬЗУЕТСЯ)
  logout(data: any): Observable<any> {
    return this.httpService.post('api/logout', data);
    this.storageService.removeItem(AuthConstants.AUTH).then(res => {
      this.router.navigate(['']);
    })
  }
  //Получение пользовательских данных
  getUserData() {
    this.storageService.get(AuthConstants.AUTH).then(value => {
    console.log(value);
     this.userData$.next(value);
    })
  }
  //Функция выхода из системы
  logoutClear() {
    this.userData$.next('');
    this.router.navigate(['']);
    this.storageService.clear();
  }

}
