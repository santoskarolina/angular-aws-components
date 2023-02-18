import { AfterContentInit, Component,ContentChildren, EventEmitter, Input, Output, QueryList, ViewChildren, ViewContainerRef } from "@angular/core";
import { openCloseTabAnimation } from "./animations/openClose";
import { TabItem } from "./directives/tab.directive";


@Component({
  selector: 'comp-tabs',
  styleUrls: ['./tabs.component.scss' ],
  templateUrl: './tabs.component.html',
  animations: [
    openCloseTabAnimation
  ],
})
export class TabsComponent implements AfterContentInit{

  @Input() public animationDuration: string = '300ms'
  @Input() public tabAlign: string = 'center'

  @ContentChildren(TabItem) tabs!: QueryList<TabItem>;

  @Output() public selectedTabChange: EventEmitter<number> = new EventEmitter<number>();

  public animationDurationValue :string = this.animationDuration;

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter(tab => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first, 0);
    }
  }

  toggleTabAnimation(tab: TabItem) {
    return tab.active ? 'open': 'closed'
  }
  selectTab(tab: TabItem, index: number) {
    this.tabs.toArray().forEach(tab =>(tab.active = false));
    tab.active = true;
    this.selectedTabChange.emit(index)
  }

  trackByFn(index: number) {
    return index;
}
}
