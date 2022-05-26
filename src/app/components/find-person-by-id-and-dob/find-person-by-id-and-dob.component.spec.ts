import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPersonByIdAndDOBComponent } from './find-person-by-id-and-dob.component';

describe('FindPersonByIdAndDOBComponent', () => {
  let component: FindPersonByIdAndDOBComponent;
  let fixture: ComponentFixture<FindPersonByIdAndDOBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPersonByIdAndDOBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPersonByIdAndDOBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
