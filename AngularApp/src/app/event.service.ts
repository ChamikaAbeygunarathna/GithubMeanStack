import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import statements

@Injectable()
export class EventService {

  private _eventsUrl = "http://localhost:3000/api/events";
  private _specialEventsUrl = "http://localhost:3000/api/special";
  // create url which need authentication

  constructor(private http: HttpClient) { }
  // declare httpclients  

  getEvents() {
    return this.http.get<any>(this._eventsUrl)
  }
  // this will involke the get() 

  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl)
  }
  // this will involke the get()   
}
// end of class
