import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameHeaderComponent } from './name-header.component';

describe('NameHeaderComponent', () => {
  let component: NameHeaderComponent;
  let fixture: ComponentFixture<NameHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
