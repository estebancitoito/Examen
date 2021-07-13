import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaggingComponent } from './nagging.component';

describe('NaggingComponent', () => {
  let component: NaggingComponent;
  let fixture: ComponentFixture<NaggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaggingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
