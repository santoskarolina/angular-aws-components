import { Component, Inject, OnInit } from "@angular/core";
import { ModalRef } from "./configs/overlay.ref";
import { AWS_MODAL_DATA } from "./configs/tokens";

@Component({
  selector: 'aws-modal',
  templateUrl: './modal.component.html',
  styleUrls: [ './modal.component.scss' ]
})
export class ModalComponent implements OnInit{

  constructor(
    public dialogRef: ModalRef,
    @Inject(AWS_MODAL_DATA) public data: any
  ){
  }

  ngOnInit(): void {
    console.log(this.data)
  }
}
