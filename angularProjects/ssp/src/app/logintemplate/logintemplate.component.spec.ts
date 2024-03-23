import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintemplateComponent } from './logintemplate.component';

describe('LogintemplateComponent', () => {
  let component: LogintemplateComponent;
  let fixture: ComponentFixture<LogintemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogintemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogintemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
