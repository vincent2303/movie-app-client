import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionRequierComponent } from './connection-requier.component';

describe('ConnectionRequierComponent', () => {
  let component: ConnectionRequierComponent;
  let fixture: ComponentFixture<ConnectionRequierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionRequierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionRequierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
