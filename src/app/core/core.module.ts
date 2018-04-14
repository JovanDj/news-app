import {NgModule} from '@angular/core';
import {HeadlinesService} from '../services/headlines.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {MyHttpInterceptor} from '../interceptors/auth-interceptor';
import {SourcesService} from '../services/sources.service';
import {EverythingService} from '../services/everything.service';

@NgModule({
  providers: [
    HeadlinesService,
    SourcesService,
    EverythingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    }]
})
export class CoreModule {
}