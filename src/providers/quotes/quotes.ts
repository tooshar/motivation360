import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let headers;
@Injectable()
export class QuotesProvider {

  constructor(public http: Http) {
    console.log('Hello QuotesProvider Provider');
  }

  getQuotes(){
    return this.http.get("https://motivation360-api.herokuapp.com/quote")
    .toPromise();
  }



}
