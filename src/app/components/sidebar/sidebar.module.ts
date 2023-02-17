import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [CommonModule, MatIconModule],
  exports: [
    SidebarComponent
  ]
})
export class SiebarModule{}
