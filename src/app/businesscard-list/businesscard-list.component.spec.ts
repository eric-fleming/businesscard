import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesscardListComponent } from './businesscard-list.component';

describe('BusinesscardListComponent', () => {
  let component: BusinesscardListComponent;
  let fixture: ComponentFixture<BusinesscardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinesscardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesscardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
