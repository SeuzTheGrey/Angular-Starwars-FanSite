import { Injectable } from '@angular/core';
import { Rest } from '../Classes/rest';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  
  constructor(private httpClient: HttpClient) { }

  async getPeople(): Promise<Rest> {

    return this.httpClient.get<Rest>('https://swapi.co/api/people').toPromise();

  }

  async getNextPage(nextPageURL: string): Promise<Rest> {
    return this.httpClient.get<Rest>(nextPageURL).toPromise();
  }

}
