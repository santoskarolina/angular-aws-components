
import { trigger, style, transition, animate } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component, ContentChildren, EventEmitter, Output, QueryList, TemplateRef, ViewChild
} from '@angular/core';
import { AwsMenuItem } from './directives/menuItem.directive';

export const DropDownAnimation = trigger("dropDownMenu", [
  transition(":enter", [
    style({ height: 0, overflow: "hidden" }),
    animate("400ms ease", style({ opacity: 1, transform: "none" }))
  ]),
  transition(":leave", [
    style({ height: "*", overflow: "hidden" }),
    animate("200ms", style({ height: 0 }))
  ])
]);

@Component({
  templateUrl: './menu.component.html',
  selector: 'aws-menu',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwsMenuComponent{
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();

  @ContentChildren(AwsMenuItem) items!: QueryList<AwsMenuItem>;
}
