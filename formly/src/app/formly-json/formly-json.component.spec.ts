import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyJsonComponent } from './formly-json.component';

describe('FormlyJsonComponent', () => {
  let component: FormlyJsonComponent;
  let fixture: ComponentFixture<FormlyJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
