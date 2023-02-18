import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: "[awstabLabel]"
})
export class TabLabel {
  constructor(public templateRef: TemplateRef<any>) {}
}
