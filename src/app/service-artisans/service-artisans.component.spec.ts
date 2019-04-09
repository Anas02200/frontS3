import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceArtisansComponent } from './service-artisans.component';

describe('ServiceArtisansComponent', () => {
  let component: ServiceArtisansComponent;
  let fixture: ComponentFixture<ServiceArtisansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceArtisansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
