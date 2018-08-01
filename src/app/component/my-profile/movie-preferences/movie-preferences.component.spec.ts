import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePreferencesComponent } from './movie-preferences.component';

describe('MoviePreferencesComponent', () => {
  let component: MoviePreferencesComponent;
  let fixture: ComponentFixture<MoviePreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
