import { Component, OnInit } from '@angular/core';
import { Rest } from '../Classes/rest';
import { Planets } from '../Classes/planets';
import { PlanetsService } from '../Services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  getRequest: Rest;
  planets: Planets[];
  nextPage?: string;
  previousPage?: string;
  constructor(private planetsService: PlanetsService) { }

  async ngOnInit() {
    this.getRequest = await this.planetsService.getPlanets();
    this.planets = this.getRequest.results;
    this.nextPage = this.getRequest.next;
    this.previousPage = this.getRequest.previous;
  }

  async getNextPage() {
    this.getRequest = await this.planetsService.getNextPage(this.nextPage);
    this.getRequest.results.forEach(element => {
      this.planets.push(element);
    });
    this.nextPage = this.getRequest.next;
    this.previousPage = this.getRequest.previous;
  }

}
