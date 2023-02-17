import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  ChangeDetectionStrategy,
  ViewChildren,
  ViewContainerRef,
  QueryList,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { AccordionItem } from './directives/accordeon.item.directive';

@Component({
  selector: 'accordeon',
  templateUrl: './accodeon.component.html',
  styleUrls: ['./accodeon.component.scss'],
  animations: [
    trigger('openClose', [
      state( 'open',
        style({
          height: '*',
          display: 'block',
          opacity: 1,
          visibility: 'visible',
        })
      ),
      state('closed',
        style({
          display: 'none',
          opacity: 0,
          visibility: 'hidden',
        })
      ),
      transition('open <=> closed', [animate('225ms')]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordeonComponent implements AfterViewInit {
  public icons = {
    open: 'fa-chevron-down',
    close: 'fa-chevron-up',
  };

  expanded = new Set<number>();
  @Input() collapsing = true;
  @Input() spaccing = true;

  @ContentChildren(AccordionItem) items!: QueryList<AccordionItem>;

  @ViewChildren('contentBody', { read: ViewContainerRef })
  contentBody!: QueryList<ViewContainerRef>;

  constructor() {}

  ngAfterViewInit(): void {
    const content = this.contentBody.toArray();
    this.items.map((item, index) => {
      const component = content[index].createComponent<any>(item.content.component);
      component.changeDetectorRef.detectChanges();
    });
  }

  toggleState = (index: number) => {
    if (this.expanded.has(index)) {
      this.expanded.delete(index);
    } else {
      if (this.collapsing) {
        this.expanded.clear();
      }
      this.expanded.add(index);
    }
  };

  getToggleState = (index: number) => {
    return this.toggleState.bind(this, index);
  };
}
