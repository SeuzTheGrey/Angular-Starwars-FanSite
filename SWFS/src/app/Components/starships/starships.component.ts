import { Component, OnInit } from '@angular/core';
import { StarshipsService } from 'src/app/Services/starships.service';
import { Rest } from 'src/app/Classes/rest';
import { Starships } from 'src/app/Classes/starships';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  getRequest: Rest;
  starships: Starships[];
  nextPage?: string;
  previousPage?: string;
  constructor(private starshipsService: StarshipsService) { }

  async ngOnInit() {
    this.getRequest = await this.starshipsService.getStarships();
    this.starships = this.getRequest.results;
    this.nextPage = this.getRequest.next;
    this.previousPage = this.getRequest.previous;
  }

  async getNextPage() {
    this.getRequest = await this.starshipsService.getNextPage(this.nextPage);
    this.getRequest.results.forEach(element => {
      this.starships.push(element);
    });
    this.nextPage = this.getRequest.next;
    this.previousPage = this.getRequest.previous;
  }

}
