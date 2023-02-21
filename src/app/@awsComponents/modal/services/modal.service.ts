import { Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal, ComponentType } from "@angular/cdk/portal";
import { Injectable, Injector } from "@angular/core";
import { AwsModalRef } from "../configs/overlay.ref";
import { AWS_MODAL_DATA } from "../configs/tokens";
import { ModalComponent } from "../modal.component";

export class DialogConfig {
  data?: any;
  closeOnbackdropClick?: boolean = false;
  width?: string
  height?: string
}

@Injectable()
export class ModalService{

  constructor(private overlay: Overlay){}

  /**
   * @description
   * Will open the modal
    * @param {ComponentType} component - Class of the component to modal
    * @param {DialogConfig} config - Object with the params to pass to the modal
   *
   */
  public openModal<T>(component: ComponentType<T>, config?: DialogConfig): AwsModalRef {
    const overlayConfig = this.getOverlayConfig()

    const overlayRef: OverlayRef = this.overlay.create(overlayConfig);

    const dialogRef = new AwsModalRef(overlayRef, component);

    const injector = this.getInjectorKeys(config!, dialogRef)

    const portal = new ComponentPortal(ModalComponent, null, injector);
    const dialog = overlayRef.attach(portal).instance;
    dialog.width = config?.width!
    dialog.height = config?.height!

    if(config?.closeOnbackdropClick) overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
    return dialogRef;
  }

  private getInjectorKeys(config: DialogConfig, dialogRef: AwsModalRef) {
    return Injector.create({
      providers: [
        { provide: AwsModalRef, useValue: dialogRef },
        { provide: AWS_MODAL_DATA, useValue: config!.data },
      ],
    });
  }

  private getOverlayPosition(){
    const positionStrategy = this.overlay.position()
    .global()
    .centerHorizontally()
    .centerVertically();

    return positionStrategy;
  }

   private getOverlayConfig(): OverlayConfig {
    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      // scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.getOverlayPosition(),
    });

    return overlayConfig;
  }

}

