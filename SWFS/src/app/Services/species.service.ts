import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rest } from '../Classes/rest';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private httpClient: HttpClient) { }

  async getSpecies(): Promise<Rest> {

    return this.httpClient.get<Rest>('https://swapi.co/api/species').toPromise();

  }

  async getNextPage(nextPageURL: string): Promise<Rest> {
    return this.httpClient.get<Rest>(nextPageURL).toPromise();
  }
}
