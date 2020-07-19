import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LazyComponent } from './lazy/lazy.component';
import { GalleryModule } from 'projects/core/src/public_api';
import { LightboxModule } from 'projects/lightbox/src/public_api';
import { GallerizeModule } from 'projects/gallerize/src/public_api';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LazyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
