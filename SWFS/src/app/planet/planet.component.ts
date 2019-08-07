import { Component, OnInit, Inject } from '@angular/core';
import { Planets } from '../Classes/planets';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PlanetComponent>,
    @Inject(MAT_DIALOG_DATA) public planet: Planets
    ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
