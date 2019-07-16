import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { People } from './Classes/people';
import { Http, Response, RequestMethod, RequestOptions, Headers } from '@angular/http';
import { async } from '@angular/core/testing';

interface getinter {
  count: number;
  next: string;
  previous: string;
  results: [];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SWFS';
  people: [];

  constructor(private http: Http) { }

   ngOnInit() {
     this.getPeople();
    console.log(this.people);
  }

  async getPeople() {
    console.log(this.people);
    await this.http.get('https://swapi.co/api/people')
      .subscribe((res: Response) => {
        console.log(res);
        console.log(res.json());
        console.log(res.json().results);
        this.people = res.json().results;
        console.table(this.people);
       
      });
    console.table(this.people);
  }
}


