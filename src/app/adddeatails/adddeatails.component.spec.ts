import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeatailsComponent } from './adddeatails.component';

describe('AdddeatailsComponent', () => {
  let component: AdddeatailsComponent;
  let fixture: ComponentFixture<AdddeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddeatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
