import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVechicleComponent } from './create-vechicle.component';

describe('CreateVechicleComponent', () => {
  let component: CreateVechicleComponent;
  let fixture: ComponentFixture<CreateVechicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVechicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVechicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
