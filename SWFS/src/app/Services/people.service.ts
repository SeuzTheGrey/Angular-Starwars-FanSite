import { Injectable } from '@angular/core';
import { Http, Response, RequestMethod, RequestOptions, Headers } from '@angular/http';
import { Rest } from '../Classes/rest';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: Rest;

  constructor(private http: Http) { }

  async getPeople(): Promise<any> {
    console.log(this.people);
    const get = await this.http.get('https://swapi.co/api/people').toPromise();
    this.people = get.json();
    return this.people;
  }
}
