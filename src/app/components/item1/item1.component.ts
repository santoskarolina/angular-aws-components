import { Component, Inject, OnInit } from "@angular/core";
import { ModalRef } from "src/app/@awsComponents/modal/configs/overlay.ref";
import { AWS_MODAL_DATA } from "src/app/@awsComponents/modal/configs/tokens";


@Component({
  selector: 'accordion-item1',
  styleUrls: ['./item1.component.scss'],
  templateUrl : './item1.component.html'
})
export class Item1Component implements OnInit{

  constructor(public dialogRef: ModalRef, @Inject(AWS_MODAL_DATA) public data: any){}

    ngOnInit(): void {
      console.log('dialogRef: ', this.dialogRef)
      console.log('data: ', this.data)
    }

    close(){
      this.dialogRef.close()
    }
}
