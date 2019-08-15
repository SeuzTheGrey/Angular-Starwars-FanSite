import { Component, OnInit } from '@angular/core';
import { Species } from 'src/app/Classes/species';
import { Rest } from 'src/app/Classes/rest';
import { SpeciesService } from 'src/app/Services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  getRequest: Rest;
  species: Species[];
  nextPage?: string;
  previousPage?: string;
  constructor(private speciesService: SpeciesService) { }

  async ngOnInit() {
    this.getRequest = await this.speciesService.getSpecies();
    this.species = this.getRequest.results;
    this.nextPage = this.getRequest.next;
    this.previousPage = this.getRequest.previous;
  }

  async getNextPage() {
    this.getRequest = await this.speciesService.getNextPage(this.nextPage);
    this.getRequest.results.forEach(element => {
      this.species.push(element);
    });
    this.nextPage = this.getRequest.next;
    this.previousPage = this.getRequest.previous;
  }
}
