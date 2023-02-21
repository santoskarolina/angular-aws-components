import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [CommonModule, OverlayModule],
  exports: [
    ModalComponent
  ],
  providers: [
    ModalService]
})
export class ModalModule {
}
