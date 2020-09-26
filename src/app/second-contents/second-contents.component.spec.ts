import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondContentsComponent } from './second-contents.component';

describe('SecondContentsComponent', () => {
  let component: SecondContentsComponent;
  let fixture: ComponentFixture<SecondContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
