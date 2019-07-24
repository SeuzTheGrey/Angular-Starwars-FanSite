import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  open = false;

  constructor() { }

  ngOnInit() {
  }


  Open = () => {
    return this.open = true;
  }

  Closed = () => {
    return this.open = false;
  }
}
