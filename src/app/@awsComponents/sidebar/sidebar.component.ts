import { trigger, state, style, transition, animate } from "@angular/animations";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'aws-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  templateUrl : './sidebar.component.html',
})
export class SidebarComponent{
  @Input() public title: string = 'Sidebar';
  @Input() public isOpen: boolean = false;

  @Output() isClosed: EventEmitter<void> = new EventEmitter<void>();

  closeSidebar(){
    this.isClosed.emit()
  }
}
