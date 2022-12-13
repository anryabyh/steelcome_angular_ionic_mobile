import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  headers = new HttpHeaders()
  options = { headers: this.headers, withCredintials: false }

  post(path: string, data: any) {
    let url = 'https://testcheck.s-k56.ru/' + path
    const header = new HttpHeaders();
    return this.http.post(url, data, this.options)
  }
  get(url: string, data: any) {
    return this.http.get(url, data)
  }
}
