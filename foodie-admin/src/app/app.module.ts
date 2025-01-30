import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthInterceptor } from './auth/auth-interceptor.service';
import { NgModule } from '@angular/core';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:8080"],
      },
    })
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class AppModule { }