import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  ViewContainerRef
} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { merge, Observable, Subscription } from 'rxjs';
import { AwsMenuComponent } from '../menu.component';

@Directive({
  selector: '[aws-menu]',
  host: {
    '(click)': 'toggleMenu()'
  }
})
export class AwsMenu implements OnDestroy {
  private _isMenuOpen = false;
  private _overlayRef: OverlayRef;
  private _menuClosingActionsSub = Subscription.EMPTY;

  @Input('menuFor') public menuPanel: AwsMenuComponent;

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef
  ) {}

  toggleMenu(): void {
    this._isMenuOpen ? this.destroyMenu() : this.openMenu();
  }

  getPositionStrategy(){
    this._overlayRef = this.overlay.create({
      scrollStrategy: this.overlay.scrollStrategies.close(),
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef)
        .withPositions([
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
            offsetY: 8
          }
        ])
    });
  }

  openMenu(): void {
    this._isMenuOpen = true;
    this.getPositionStrategy();

    const templatePortal = new TemplatePortal(
      this.menuPanel.templateRef,
      this.viewContainerRef
    );
    this._overlayRef.attach(templatePortal);

    this._menuClosingActionsSub = this.menuClosingActions().subscribe({
      next: () => this.destroyMenu()
  });
  }

  private menuClosingActions(): Observable<MouseEvent | void> {
    const backdropClick$ = this._overlayRef.backdropClick();
    const detachment$ = this._overlayRef.detachments();
    const menuClosed = this.menuPanel.closed;

    return merge(backdropClick$, detachment$, menuClosed);
  }

  private destroyMenu(): void {
    if (!this._overlayRef || !this._isMenuOpen) {
      return;
    }

    this._menuClosingActionsSub.unsubscribe();
    this._isMenuOpen = false;
    this._overlayRef.detach();
  }

  ngOnDestroy(): void {
    if (this._overlayRef) {
      this._overlayRef.dispose();
    }
  }
}
