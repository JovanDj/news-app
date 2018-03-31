import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormlyModule} from '@ngx-formly/core';
import {CoreModule} from './core/core.module';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {ClickOutsideModule} from 'ng4-click-outside';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {HeadlinesComponent} from './headlines/headlines.component';
import {SourcesComponent} from './sources/sources.component';
import {HomeComponent} from './home/home.component';
import {EverythingComponent} from './everything/everything.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {EverythingService} from './services/everything.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        HeadlinesComponent,
        EverythingComponent,
        SourcesComponent,
        HomeComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        FormlyBootstrapModule,
        FormlyModule.forRoot(),
        ClickOutsideModule
      ],
      providers: []
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

