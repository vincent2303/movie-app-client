import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationMoviesComponent } from './correlation-movies.component';

describe('CorrelationMoviesComponent', () => {
  let component: CorrelationMoviesComponent;
  let fixture: ComponentFixture<CorrelationMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrelationMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrelationMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
