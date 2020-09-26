import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstContentsComponent } from './first-contents.component';

describe('FirstContentsComponent', () => {
  let component: FirstContentsComponent;
  let fixture: ComponentFixture<FirstContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
