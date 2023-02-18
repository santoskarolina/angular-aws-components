import { ContentChild,  Directive, Input } from "@angular/core";
import { TabContent } from "./tab-content.directive";
import { TabLabel } from "./tabLabel.directive";

@Directive({
  selector: "tab-item"
})
export class TabItem {
  @ContentChild(TabLabel) tabLabel!: TabLabel;
  @ContentChild(TabContent) tabContent!: TabContent;
  @Input() tabTitle!:string;
  @Input() active = false;
}
