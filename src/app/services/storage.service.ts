import { Injectable } from '@angular/core';
import { escape } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async store(storageKey: string, value: any) {
    // const encryptedValue = btoa(escape(JSON.stringify(value)));
    const encryptedValue = JSON.stringify(value);
    localStorage.setItem(storageKey, encryptedValue)
  }
  async get(storageKey: string){
    const res = localStorage.getItem(storageKey);
    if (res){
      return  JSON.parse(res);
    }else{
      return false;
    }
  }
  async removeItem(storageKey: string){
    localStorage.removeItem(storageKey);
  }
  async clear(){
    localStorage.clear();
  }

}
