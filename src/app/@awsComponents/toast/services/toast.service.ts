import { Inject, Injectable, InjectionToken, Injector } from "@angular/core";
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ToastComponent } from "../toast.component";
import { ToastConfig  } from "../models/toast.config.model";
import { ToastRef } from "../models/toast.ref";
import { ToastPosConfig } from "../models/toas.positions.config";

export const TOAST_CONFIG_TOKEN = new InjectionToken('toast-config');
@Injectable()
export class ToastService {
  private toastRef: ToastRef;

  constructor(
    private overlay: Overlay,
    @Inject(TOAST_CONFIG_TOKEN) private toastConfig: ToastPosConfig
  ) {}

   /**
   * @description
   * Will display a success toast
    * @param {ToastConfig} config - Configuration object to display the toast
    * @param {string} config.message - Message that will be displayed in the toast.
    * @param {number} config.time - Time for the toast to close, by default the time is 5000ms
    * @param {boolean} [config.showCloseButton] - if true, it should display the button to close the toast
   *
   */
  public showSucessToast(config: ToastConfig) {
    config.type = 'success';
    this.showToast(config);
  }

   /**
   * @description
   * Will display a error toast
    * @param {ToastConfig} config - Configuration object to display the toast
    * @param {string} config.message - Message that will be displayed in the toast.
    * @param {number} config.time - Time for the toast to close, by default the time is 5000ms
    * @param {boolean} [config.showCloseButton] - if true, it should display the button to close the toast
   *
   */
  public showErrorToast(config: ToastConfig) {
    config.type = 'error';
    this.showToast(config);
  }

   /**
   * @description
   * Will display a info toast
    * @param {ToastConfig} config - Configuration object to display the toast
    * @param {string} config.message - Message that will be displayed in the toast.
    * @param {number} config.time - Time for the toast to close, by default the time is 5000ms
    * @param {boolean} [config.showCloseButton] - if true, it should display the button to close the toast
   *
   */
  public showInfoToast(config: ToastConfig) {
    config.type = 'info';
    this.showToast(config);
  }

  /**
   * @description
   * Will display a alert toast
    * @param {ToastConfig} config - Configuration object to display the toast
    * @param {string} config.message - Message that will be displayed in the toast.
    * @param {number} config.time - Time for the toast to close, by default the time is 5000ms
    * @param {boolean} [config.showCloseButton] - if true, it should display the button to close the toast
   *
   */
  public showAlertToast(config: ToastConfig) {
    config.type = 'alert';
    this.showToast(config);
  }

  /**
   * @description
   * Will display the toast
    * @param {ToastConfig} config - Configuration object to display the toast
    * @param {string} config.message - Message that will be displayed in the toast.
    * @param {number} config.time - Time for the toast to close, by default the time is 5000ms
    * @param {string} config.type - Type of toast you want to display, which can be error, success, alert and information
    * @param {boolean} [config.showCloseButton] - if true, it should display the button to close the toast
   *
   */
  private showToast(config: ToastConfig) {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({ positionStrategy });

    const toastRef = new ToastRef(overlayRef);
    this.toastRef = toastRef;

    const injector = this.getInjector(config, toastRef);

    const toastPortal = new ComponentPortal(ToastComponent, null, injector);

    overlayRef.attach(toastPortal);

    return toastRef;
  }

  getPositionStrategy() {
    return this.overlay
      .position()
      .global()
      .top(this.getPosition())
      .right(this.toastConfig.position!.right + 'px');
  }

  getPosition() {
    const toastRefIsVisible = this.toastRef && this.toastRef.isVisible();
    const position = toastRefIsVisible
      ? this.toastRef.getPosition().bottom
      : this.toastConfig.position!.top;

    return position + 'px';
  }

  getInjector(data: ToastConfig, toastRef: ToastRef) {
    return Injector.create({
      providers: [
        { provide: ToastConfig, useValue: data },
        { provide: ToastRef, useValue: toastRef },
      ],
    });
  }
}
