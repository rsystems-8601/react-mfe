import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginreactiveComponent } from './loginreactive.component';

describe('LoginreactiveComponent', () => {
  let component: LoginreactiveComponent;
  let fixture: ComponentFixture<LoginreactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginreactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
