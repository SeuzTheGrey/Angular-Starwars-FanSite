import { Component, OnInit, Input } from '@angular/core';
import { People } from '../../Classes/people';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() person: People;
  constructor() { }

  ngOnInit() {}

}
