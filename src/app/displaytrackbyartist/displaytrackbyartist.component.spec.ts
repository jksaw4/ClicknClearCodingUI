import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytrackbyartistComponent } from './displaytrackbyartist.component';

describe('DisplaytrackbyartistComponent', () => {
  let component: DisplaytrackbyartistComponent;
  let fixture: ComponentFixture<DisplaytrackbyartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaytrackbyartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaytrackbyartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
