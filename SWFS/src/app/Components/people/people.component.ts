import { Component, OnInit } from '@angular/core';
import { PeopleService } from "../../Services/people.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  getRequest: [];
  people: [];
  constructor(private peopleService: PeopleService) { }

  async ngOnInit() {
    this.getRequest = await this.peopleService.getPeople();
    this.people = this.getRequest.results;
    console.log(this.people);
  }

}
