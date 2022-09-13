import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './pages/header/header.component';
import { AuthModule } from './auth/auth.module';
import * as fromApp from './store/app.reducer';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    SharedModule,
    AuthModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
