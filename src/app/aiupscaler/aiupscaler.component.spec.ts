import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiupscalerComponent } from './aiupscaler.component';

describe('AiupscalerComponent', () => {
  let component: AiupscalerComponent;
  let fixture: ComponentFixture<AiupscalerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiupscalerComponent]
    });
    fixture = TestBed.createComponent(AiupscalerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
