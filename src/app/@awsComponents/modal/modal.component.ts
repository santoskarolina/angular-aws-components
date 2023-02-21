import { Component, Inject, AfterViewInit, ViewChildren, ViewContainerRef, ChangeDetectionStrategy, QueryList, OnInit } from "@angular/core";
import { ModalRef } from "./configs/overlay.ref";
import { AWS_MODAL_DATA } from "./configs/tokens";

@Component({
  selector: 'aws-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements AfterViewInit, OnInit {

  public width: string = '10rem';
  public height: string = '10rem';

  @ViewChildren('content', { read: ViewContainerRef })
  content!: QueryList<ViewContainerRef>;

  constructor(
    public dialogRef: ModalRef,
    @Inject(AWS_MODAL_DATA) public data: any) { }


  ngOnInit(): void {
    if (this.data.width) this.width = this.data.width
    if (this.data.height) this.height = this.data.height
  }

  ngAfterViewInit(): void {
    this.createComponent()
  }

  createComponent() {
    const content = this.content.toArray();
    const component = content[0].createComponent<any>(this.dialogRef.content);
    component.changeDetectorRef.detectChanges();
  }
}
