import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {OneComponent} from './one/one.component';
import {TwoComponent} from './two/two.component';
import {ThreeComponent} from './three/three.component';
import {ThreeModule} from './three/three.module';
import {OneModule} from './one/one.module';
import {TwoModule} from './two/two.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    OneModule,
    TwoModule,
    ThreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
