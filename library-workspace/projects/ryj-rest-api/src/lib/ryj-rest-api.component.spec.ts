import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RyjRestApiComponent } from './ryj-rest-api.component';

describe('RyjRestApiComponent', () => {
  let component: RyjRestApiComponent;
  let fixture: ComponentFixture<RyjRestApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RyjRestApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RyjRestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
