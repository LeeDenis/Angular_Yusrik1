import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualaboutComponent } from './actualabout.component';

describe('ActualaboutComponent', () => {
  let component: ActualaboutComponent;
  let fixture: ComponentFixture<ActualaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
