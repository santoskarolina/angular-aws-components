import { trigger, state, style, transition, animate } from "@angular/animations";
import { Component, ContentChild, Input, TemplateRef  } from "@angular/core";
import { TabLabel } from "../directives/tabLabel.directive";

@Component({
  selector: 'comp-tab',
  styleUrls: ['./tab.component.scss' ],
  templateUrl: './tab.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('closed', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('open => closed', animate('300ms ease-in-out')),
      transition('closed => open', animate('300ms ease-in-out'))
    ]),
  ],
})
export class TabComponent{
  @Input() tabTitle!:string;
  @Input() active = false;

  @ContentChild(TabLabel) tabLabel!: TabLabel;
}
