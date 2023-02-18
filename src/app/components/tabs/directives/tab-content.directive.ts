import { Directive, Input, TemplateRef  } from '@angular/core';

@Directive({
  selector: "[awstabContent]"
})
export class TabContent {
  constructor(public templateRef: TemplateRef<any>) {}
}
