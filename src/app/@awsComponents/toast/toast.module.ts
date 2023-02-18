import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { defaultToastConfig } from './models/toas.positions.config';
import { ToastService, TOAST_CONFIG_TOKEN } from './services/toast.service';
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
export class ToastModule{
  public static forRoot(config = defaultToastConfig):ModuleWithProviders<ToastModule> {
    return {
        ngModule: ToastModule,
        providers: [
            {
                provide: TOAST_CONFIG_TOKEN,
                useValue: { ...defaultToastConfig, ...config },
            },
        ],
    };
}
}
