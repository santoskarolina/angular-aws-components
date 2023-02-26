import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[aws-menu-item]"
})
export class AwsMenuItem {
  constructor(public elementRef: ElementRef<HTMLElement>) {}
}
