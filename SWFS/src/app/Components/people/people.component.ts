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
  nextPage?: string;
  previousPage?: string;
  constructor(private peopleService: PeopleService) { }

  async ngOnInit() {
    this.getRequest = await this.peopleService.getPeople();
    this.people = this.getRequest.results;
    this.nextPage = this.getRequest.next;
    this.previousPage = this.getRequest.previous;
  }

  async getNextPage() {
    this.getRequest = await this.peopleService.getNextPage(this.nextPage);
    this.getRequest.results.forEach(element => {
      this.people.push(element);
    });
    this.nextPage = this.getRequest.next;
    this.previousPage = this.getRequest.previous;
  }

}
