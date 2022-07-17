import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test-cookie';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.http.post('http://localhost:8090/public/refresh_token', null, { withCredentials: true, observe: 'response' }).subscribe(response => {
    //   console.log(response.headers)
    // });
  }

  getToken() {
    // const headers = new HttpHeaders();
    // headers.set('Content-Type', 'application/x-www-form-urlencoded')
    const headers = new HttpHeaders({
      "Authorization": "Basic Y2xpZW50MTpzZWNyZXQ="
    });
    this.http.post('http://localhost:8090/oauth/token', {username: 'cuong', password: '123456'}, { withCredentials: true, headers }).subscribe(response => {
      console.log(response)
    });
  }

  checkToken() {
    this.http.post('http://localhost:8090/api/request2', { withCredentials: true }).subscribe(response => {
      console.log(response)
    });
  }
}
