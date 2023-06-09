import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexBoxGeneratorModule } from './flex-box-generator/generator.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FlexBoxGeneratorModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
