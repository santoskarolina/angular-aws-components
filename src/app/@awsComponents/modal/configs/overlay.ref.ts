import { OverlayRef } from "@angular/cdk/overlay";
import { Observable } from "rxjs";
import { Subject } from "rxjs/internal/Subject";

export class ModalRef {
  private afterClosedSubject = new Subject<any>();

  constructor(private overlayRef: OverlayRef,  public content: any) {}

  /**
   * Closes the overlay. You can optionally provide a result.
   */
  public close(result?: any) {
    this.overlayRef.dispose();
    this.afterClosedSubject.next(result);
    this.afterClosedSubject.complete();
  }

  /**
   * An Observable that notifies when the overlay has closed
   */
  public afterClosed(): Observable<any> {
    return this.afterClosedSubject.asObservable();
  }
}
