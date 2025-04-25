import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RyjPromisesApiComponent } from './ryj-promises-api.component';

describe('RyjPromisesApiComponent', () => {
  let component: RyjPromisesApiComponent;
  let fixture: ComponentFixture<RyjPromisesApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RyjPromisesApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RyjPromisesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
