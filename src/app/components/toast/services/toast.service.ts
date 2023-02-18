import { ComponentRef, Injectable } from "@angular/core";
import { GlobalPositionStrategy, Overlay,  OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ToastComponent } from "../toast.component";
import { interval, Observable } from "rxjs";
import { ToastConfig } from "../models/toas.config.model";

@Injectable()
export class ToastService{

  private _overlayRef: OverlayRef | undefined;

  private toastRef: ComponentRef<ToastComponent> | undefined;

  constructor(
    private _overlay: Overlay,
  ){}

  public showSucessToast(config: ToastConfig){
    config.type = 'success'
    this.showTosat(config)
  }

  public showErrorToast(config: ToastConfig){
    config.type = 'error'
    this.showTosat(config)
  }

  public showInfoToast(config: ToastConfig){
    config.type = 'info'
    this.showTosat(config)
  }

  public showAlertToast(config: ToastConfig){
    config.type = 'alert'
    this.showTosat(config)
  }

  private showTosat(config: ToastConfig){

    if(config.position === 'left'){
      this.configOverlayPositionleft()
    }else if(config.position === 'right'){
      this.configOverlayPositionRigth()
    }

      const toastRef: ComponentRef<ToastComponent> = this._overlayRef!.attach(new ComponentPortal(ToastComponent));
      toastRef.instance.message = config.message;
      toastRef.instance.class = config.type!;
      toastRef.instance.closeButton = config.showCloseButton!;

      this.toastRef = toastRef

      var time = config.time ?? 5000

    this.closeToastByTime(time)
  }

  private closeToastByTime(time: number){

    var close: Observable<number> = interval(time)

    close.subscribe(() => {
      if (!this._overlayRef!.detach()) this._overlayRef!.detach();
    });
  }


  public closeToast(){
    if (!this._overlayRef!.detach()) this._overlayRef!.detach();
  }

  private configOverlayPositionleft(): void{
    const positionStrategy = this._overlay.position()
      .global()
      .left()
      .top();

      this.createOverlay(positionStrategy)
  }

  private configOverlayPositionRigth() : void{
    const positionStrategy = this._overlay.position()
      .global()
      .right()
      .top();
      this.createOverlay(positionStrategy)
  }

  private createOverlay(positionStrategy: GlobalPositionStrategy){
    this._overlayRef = this._overlay.create({
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      positionStrategy: positionStrategy,
    });
  }
}
