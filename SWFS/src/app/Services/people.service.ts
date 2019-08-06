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


  // async getPeople(): Promise<Rest> {
  //   console.log(this.people);
  //   const get = await this.http.get('https://swapi.co/api/people').toPromise();
  //   this.people = get.json();
  //   return this.people;
  // }
}
