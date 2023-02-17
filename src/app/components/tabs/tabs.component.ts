import { animate, state, style, transition, trigger } from "@angular/animations";
import { AfterContentInit, Component,ContentChildren, EventEmitter, Output, QueryList, ViewChildren, ViewContainerRef } from "@angular/core";
import { TabItem } from "./directives/tab.directive";
import { TabComponent } from "./tab/tab.component";

@Component({
  selector: 'comp-tabs',
  styleUrls: ['./tabs.component.scss' ],
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements AfterContentInit{

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  @Output() public selectedTabChange: EventEmitter<number> = new EventEmitter<number>();

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter(tab => tab.active);
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first, 0);
    }
  }

  selectTab(tab: TabComponent, index: number) {
    this.tabs.toArray().forEach(tab =>(tab.active = false));
    tab.active = true;
    this.selectedTabChange.emit(index)
  }
}
