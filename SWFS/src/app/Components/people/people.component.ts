import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../Services/people.service';
import { Rest } from '../../Classes/rest';
import { People } from '../../Classes/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  getRequest: Rest;
  people: People[];
  constructor(private peopleService: PeopleService) { }

  async ngOnInit() {
    this.getRequest = await this.peopleService.getPeople();
    this.people = this.getRequest.results;
  }

}
