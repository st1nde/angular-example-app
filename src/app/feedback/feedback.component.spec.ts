import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackComponent } from './feedback.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from '../app.component';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title should have validators', () => {
    const ctrl = component.fbForm.get('title');
    ctrl?.setValue(null);
    fixture.detectChanges;
    expect(ctrl?.invalid).toBeTruthy();
  });

  it('description should have validators', () => {
    const ctrl = component.fbForm.get('description');
    ctrl?.setValue(null);
    fixture.detectChanges;
    expect(ctrl?.invalid).toBeTruthy();
  });

  it('name should have minLenght', () => {
    const ctrl = component.fbForm.get('name');
    ctrl?.setValue(1);
    fixture.detectChanges;
    expect(ctrl?.invalid).toBeTruthy();
  });

  it('should mark name as valid when it has 2 or more characters', () => {
    const ctrl = component.fbForm.get('name');
    ctrl?.setValue('ab');
    fixture.detectChanges;
    expect(ctrl?.valid).toBeTruthy();
  });

});
