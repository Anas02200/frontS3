import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignCliComponent } from './sign-cli.component';

describe('SignCliComponent', () => {
  let component: SignCliComponent;
  let fixture: ComponentFixture<SignCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
