import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLayoutComponent } from './text-layout.component';

describe('TextLayoutComponent', () => {
  let component: TextLayoutComponent;
  let fixture: ComponentFixture<TextLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
