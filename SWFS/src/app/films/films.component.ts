import { Component, OnInit } from '@angular/core';
import { Films } from '../Classes/films';
import { Rest } from '../Classes/rest';
import { FilmsService } from '../Services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  getRequest: Rest;
  films: Films[];
  nextPage?: string;
  previousPage?: string;
  constructor(private filmsService: FilmsService) { }

  async ngOnInit() {
    this.getRequest = await this.filmsService.getFilms();
    this.films = this.getRequest.results;
    this.nextPage = this.getRequest.next;
    this.previousPage = this.getRequest.previous;
  }

  async getNextPage() {
    this.getRequest = await this.filmsService.getNextPage(this.nextPage);
    this.getRequest.results.forEach(element => {
      this.films.push(element);
    });
    this.nextPage = this.getRequest.next;
    this.previousPage = this.getRequest.previous;
  }

}
