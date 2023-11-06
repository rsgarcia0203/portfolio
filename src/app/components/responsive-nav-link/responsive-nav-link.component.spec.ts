import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveNavLinkComponent } from './responsive-nav-link.component';

describe('ResponsiveNavLinkComponent', () => {
  let component: ResponsiveNavLinkComponent;
  let fixture: ComponentFixture<ResponsiveNavLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsiveNavLinkComponent]
    });
    fixture = TestBed.createComponent(ResponsiveNavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
