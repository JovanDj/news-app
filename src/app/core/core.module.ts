import {NgModule} from '@angular/core';
import {RequestsService} from '../services/requests.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {MyHttpInterceptor} from '../interceptors/auth-interceptor';

@NgModule({
  imports: [],
  providers: [
    RequestsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }]
})
export class CoreModule {
}
