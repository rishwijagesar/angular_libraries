import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEasyRestApiComponent } from './angular-easy-rest-api.component';

describe('AngularEasyRestApiComponent', () => {
  let component: AngularEasyRestApiComponent;
  let fixture: ComponentFixture<AngularEasyRestApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularEasyRestApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularEasyRestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
