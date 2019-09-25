import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FancyFormModule } from 'fancy-form';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FancyFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
