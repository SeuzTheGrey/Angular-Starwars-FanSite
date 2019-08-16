import { Component, OnInit, Inject } from '@angular/core';
import { Starships } from 'src/app/Classes/starships';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StarshipComponent>,
    @Inject(MAT_DIALOG_DATA) public starships: Starships
    ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
