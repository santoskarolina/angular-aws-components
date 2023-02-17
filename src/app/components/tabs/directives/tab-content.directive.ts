import { Directive, Input, TemplateRef  } from '@angular/core';

@Directive({
  selector: "[tabContent]"
})
export class TabContent {
  constructor(public templateRef: TemplateRef<any>) {}
}
