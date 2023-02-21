import { Component, Inject, OnInit } from "@angular/core";
import { AwsModalRef } from "src/app/@awsComponents/modal/configs/overlay.ref";
import { AWS_MODAL_DATA } from "src/app/@awsComponents/modal/configs/tokens";

@Component({
  selector: 'accordion-item2',
  styleUrls: ['./item2.component.scss'],
  templateUrl : './item2.component.html'
})
export class Item2Component implements OnInit{

  constructor(public dialogRef: AwsModalRef, @Inject(AWS_MODAL_DATA) public data: any){}

    ngOnInit(): void {
    }

    close(){
      this.dialogRef.close()
    }
}
