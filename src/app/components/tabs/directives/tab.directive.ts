import { ContentChild, ContentChildren, Directive, Input } from "@angular/core";
import { TabContent } from "./tab-content.directive";
import { TabLabel } from "./tabLabel.directive";

@Directive({
  selector: "tab-item"
})
export class TabItem {
  @ContentChildren(TabLabel) tabLabel!: TabLabel;
  @ContentChildren(TabContent) tabContent!: TabContent;
  @Input() tabTitle!:string;
  @Input() active = false;
}
