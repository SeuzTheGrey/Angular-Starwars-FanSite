import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesSingleComponent } from './species-single.component';

describe('SpeciesSingleComponent', () => {
  let component: SpeciesSingleComponent;
  let fixture: ComponentFixture<SpeciesSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
