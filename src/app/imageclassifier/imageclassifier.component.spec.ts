import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageclassifierComponent } from './imageclassifier.component';

describe('ImageclassifierComponent', () => {
  let component: ImageclassifierComponent;
  let fixture: ComponentFixture<ImageclassifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageclassifierComponent]
    });
    fixture = TestBed.createComponent(ImageclassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
