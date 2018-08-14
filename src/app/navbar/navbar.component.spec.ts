import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let title: HTMLElement;
  let subtitle: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbModule, RouterTestingModule],
      declarations: [NavbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    title = fixture.nativeElement.querySelector('#title');
    subtitle = fixture.nativeElement.querySelector('#subtitle');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    fixture.detectChanges();
    expect(title.textContent).toContain(component.title);
  });

  it('should display subtitle', () => {
    fixture.detectChanges();
    expect(subtitle.textContent).toContain(component.subtitle);
  });

  describe('Dropdown', () => {
    it('should be closed at start', () => {
      expect(component.isCollapsed).toBeTruthy();
    });

    it('should open dropdown', () => {
      component.openDropdown();
      expect(component.isCollapsed).toBeFalsy();
    });

    it('should close dropdown', () => {
      component.openDropdown();
      component.closeDropdown();
      expect(component.isCollapsed).toBeTruthy();
    });
  });
});
