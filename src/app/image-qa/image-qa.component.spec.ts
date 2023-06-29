import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageQAComponent } from './image-qa.component';

describe('ImageQAComponent', () => {
  let component: ImageQAComponent;
  let fixture: ComponentFixture<ImageQAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageQAComponent]
    });
    fixture = TestBed.createComponent(ImageQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
