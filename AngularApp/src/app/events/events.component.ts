import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
// import statements

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
// include all components which include in this class

export class EventsComponent implements OnInit {

  events = []
  constructor(private _eventService: EventService) { }
// this will invoke to to eventservice class methods
  ngOnInit() {
    this._eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )
  }

}
