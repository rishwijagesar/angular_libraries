import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RyjObservablesApiComponent } from './ryj-observables-api.component';

describe('RyjObservablesApiComponent', () => {
  let component: RyjObservablesApiComponent;
  let fixture: ComponentFixture<RyjObservablesApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RyjObservablesApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RyjObservablesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
