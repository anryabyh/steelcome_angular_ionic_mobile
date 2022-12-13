import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthConstants } from '../config/auth-constants';
import { StorageService } from '../services/storage.service';
@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  constructor(private storageServise: StorageService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(resolve => {
      this.storageServise.get(AuthConstants.AUTH).then(value => {
        if (value) { resolve(true) } else {
          this.router.navigate(['']);
          resolve(false)
        }
      }).catch(error => {
        resolve(false);
      });
    });
  }

}
