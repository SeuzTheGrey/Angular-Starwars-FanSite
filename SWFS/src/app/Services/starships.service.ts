import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rest } from '../Classes/rest';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private httpClient: HttpClient) { }

  async getStarships(): Promise<Rest> {

    return this.httpClient.get<Rest>('https://swapi.co/api/starships').toPromise();

  }

  async getNextPage(nextPageURL: string): Promise<Rest> {
    return this.httpClient.get<Rest>(nextPageURL).toPromise();
  }
}
