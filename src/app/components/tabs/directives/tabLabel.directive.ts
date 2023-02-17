import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: "[tabLabel]"
})
export class TabLabel {
  constructor(public templateRef: TemplateRef<any>) {}
}
