import { Directive, Input, TemplateRef  } from '@angular/core';

@Directive({
  selector: "[accordionContent]"
})
export class AccordionContent {
  @Input() public component: any
  constructor(public templateRef: TemplateRef<any>) {}
}
