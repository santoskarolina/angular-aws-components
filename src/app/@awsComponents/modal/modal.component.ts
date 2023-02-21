import { trigger, style, transition, animate  } from "@angular/animations";
import { Component, Inject, AfterViewInit, ViewChildren,Input, ViewContainerRef, ChangeDetectionStrategy, QueryList, OnInit, Injector, HostBinding } from "@angular/core";
import { AwsModalRef } from "./configs/overlay.ref";
import { AWS_MODAL_DATA } from "./configs/tokens";

@Component({
  selector: 'aws-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('box', [
      transition(':leave', [
        animate(200, style({ opacity: 0 })),
      ]),
      transition(':enter', [
        style({
          transform: 'scale(0.5)'
        }),
        animate('200ms ease-out', style({
          transform: 'scale(1.2)'
        })),
        animate('100ms ease-out', style({
          transform: 'scale(1)'
        }))
      ]),
    ]),
  ],
})
export class ModalComponent implements AfterViewInit, OnInit {
  @Input() public width: string = '10rem';
  @Input() public height: string = '10rem';

  @ViewChildren('content', { read: ViewContainerRef })
  content!: QueryList<ViewContainerRef>;

  @HostBinding('@box') public box = true;

  constructor(
    public dialogRef: AwsModalRef,
    private injector: Injector,
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
        { provide: AwsModalRef, useValue: this.dialogRef },
        { provide: AWS_MODAL_DATA, useValue: this.data },
      ],
      parent: this.injector
    });
  }

  private createComponent() {
    const options =  {
      injector: this.getInjectorKeys()
    }

    const content = this.content.toArray();
    const component = content[0].createComponent<any>(this.dialogRef.content, options);
    component.changeDetectorRef.detectChanges();
  }
}
