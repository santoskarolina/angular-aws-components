import { trigger, style, transition, animate } from "@angular/animations";
import { Component, Inject, AfterViewInit, ViewChildren,Input, ViewContainerRef, ChangeDetectionStrategy, QueryList, OnInit, Injector } from "@angular/core";
import { ModalRef } from "./configs/overlay.ref";
import { AWS_MODAL_DATA } from "./configs/tokens";

@Component({
  selector: 'aws-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ],
})
export class ModalComponent implements AfterViewInit, OnInit {

  @Input() public width: string = '10rem';
  @Input() public height: string = '10rem';

  @ViewChildren('content', { read: ViewContainerRef })
  content!: QueryList<ViewContainerRef>;

  constructor(
    public dialogRef: ModalRef,
    @Inject(AWS_MODAL_DATA) public data: any)
  { }

  ngOnInit(): void {
    this.setModalSize()
  }

  ngAfterViewInit(): void {
    this.createComponent()
  }

  setModalSize(){
    if (this.data.width) this.width = this.data.width
    if (this.data.height) this.height = this.data.height
  }

  private getInjectorKeys() {
    return Injector.create({
      providers: [
        { provide: ModalRef, useValue: this.dialogRef },
        { provide: AWS_MODAL_DATA, useValue: this.data },
      ],
    });
  }

  private createComponent() {
    const options =  {
      injector: this.getInjectorKeys()
    }

    const content = this.content.toArray();
    const component = content[0].createComponent<any>(this.dialogRef.content, options);
    component.changeDetectorRef.detectChanges();
    // const portal = new ComponentPortal(his.dialogRef.content, null, injector);
    // const overlayRef: OverlayRef = this.overlay.create();
    // const dialog = overlayRef.attach(portal).instance;
  }
}
