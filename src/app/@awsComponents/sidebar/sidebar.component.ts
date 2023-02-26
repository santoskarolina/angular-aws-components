import { trigger, state, style, transition, animate } from "@angular/animations";
import { Component, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: 'aws-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  templateUrl : './sidebar.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        visibility: 'visible',
        transform: 'translateX(0)'
      })),
      state('closed', style({
        opacity: 0,
        visibility: 'hidden',
        transform: 'translateX(-100%)'
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.4s')
      ]),
    ]),
  ],
})
export class SidebarComponent implements OnChanges{
  @Input() public title: string = 'Sidebar';
  @Input() public isOpen: boolean = false;

  @Output() isClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostBinding('style.width')
  open: string = '0';

  constructor(
  ){}

  closeSidebar(){
    this.isClosed.emit(false)
  }

  ngOnChanges(changes: SimpleChanges): void {
     if(this.isOpen) {this.open = '100%'} else {this.open = '0' }
  }
}
