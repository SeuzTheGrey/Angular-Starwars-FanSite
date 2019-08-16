import { Component, OnInit, Inject } from '@angular/core';
import { Species } from 'src/app/Classes/species';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-species-single',
  templateUrl: './species-single.component.html',
  styleUrls: ['./species-single.component.css']
})
export class SpeciesSingleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SpeciesSingleComponent>,
    @Inject(MAT_DIALOG_DATA) public species: Species
    ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
