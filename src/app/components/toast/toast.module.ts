import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ToastService } from './services/toast.service';
import { ToastComponent } from './toast.component';

@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [CommonModule, OverlayModule, MatIconModule],
  exports: [
    ToastComponent,
  ],
  providers: [ ToastService ]
})
export class ToastModule{}
