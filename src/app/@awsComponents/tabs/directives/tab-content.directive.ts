import { Directive, TemplateRef  } from '@angular/core';

@Directive({
  selector: "[awstabContent]"
})
export class TabContent {
  constructor(public templateRef: TemplateRef<any>) {}
}
