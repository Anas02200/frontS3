import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignArtiComponent } from './sign-arti.component';

describe('SignArtiComponent', () => {
  let component: SignArtiComponent;
  let fixture: ComponentFixture<SignArtiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignArtiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignArtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
