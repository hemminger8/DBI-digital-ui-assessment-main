import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratedSearchesComponent } from './curated-searches.component';

describe('CuratedSearchesComponent', () => {
  let component: CuratedSearchesComponent;
  let fixture: ComponentFixture<CuratedSearchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuratedSearchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratedSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
