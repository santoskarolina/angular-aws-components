import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Item1Component } from './components/item1/item1.component';
import { AccordeonModule } from './@awsComponents/accordeon/accordeon.module';
import { SiebarModule } from './@awsComponents/sidebar/sidebar.module';
import { TabsModule } from './@awsComponents/tabs/tabs.module';
import { ToastModule } from './@awsComponents/toast/toast.module';
import { ToastService } from './@awsComponents/toast/services/toast.service';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    Item1Component,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordeonModule,
    MatIconModule,
    SiebarModule,
    TabsModule,
    ToastModule.forRoot(),
    MatButtonModule
  ],
  providers: [],
  exports: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
