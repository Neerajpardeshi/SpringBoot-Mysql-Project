import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetEmpComponent } from './greet-emp.component';

describe('GreetEmpComponent', () => {
  let component: GreetEmpComponent;
  let fixture: ComponentFixture<GreetEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
