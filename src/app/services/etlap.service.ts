import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Subject, throwError } from 'rxjs';
import {Menu} from '../model/Menu'


@Injectable({
  providedIn: 'root'
})
export class EtlapService {
  menu: Menu;
  error = new Subject<string>();

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  fetchMenu() {
    return this.http
      .get(
        'https://etlap-7d540.firebaseio.com/test.json'
      )
      .pipe(
        map(responseData => {
          const menuArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              menuArray.push({ ...responseData[key], id: key });
            }
          }
          console.log('fetch lefutott ...')
          return menuArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }
  fetchMenu2() {
    return this.http
      .get(
        'https://etlap-7d540.firebaseio.com/test.json'
      );
  }

  fetchMenu3(){
    console.log('fetchMenu3 running');
    return this.http.get<GetResponse>('https://etlap-7d540.firebaseio.com/test.json').pipe(map (response => response._embedded.menu));
  }

}

interface GetResponse {
  _embedded: {
    menu: Menu;
  }
}
