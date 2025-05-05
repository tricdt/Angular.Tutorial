import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFeaturesComponent } from './ui-features.component';

describe('UiFeaturesComponent', () => {
  let component: UiFeaturesComponent;
  let fixture: ComponentFixture<UiFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
