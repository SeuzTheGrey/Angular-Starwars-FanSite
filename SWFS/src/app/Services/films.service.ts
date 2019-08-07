import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rest } from '../Classes/rest';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private httpClient: HttpClient) { }

  async getPlanets(): Promise<Rest> {

    return this.httpClient.get<Rest>('https://swapi.co/api/films').toPromise();

  }

  async getNextPage(nextPageURL: string): Promise<Rest> {
    return this.httpClient.get<Rest>(nextPageURL).toPromise();
  }
}
