import { ContentChild, Directive, Input } from "@angular/core";
import { AccordionContent } from "./accordeon.content.directive";
import { AccordionHeader } from "./accordeon.header.directive";
import { AccordionTitle } from "./accordeon.title.directive";

@Directive({
  selector: "accordion-item"
})
export class AccordionItem {
  @Input() title = "";
  @Input() disabled = false;
  @ContentChild(AccordionContent) content!: AccordionContent;
  @ContentChild(AccordionTitle) customTitle!: AccordionTitle;
  @ContentChild(AccordionHeader) customHeader!: AccordionHeader;
}
