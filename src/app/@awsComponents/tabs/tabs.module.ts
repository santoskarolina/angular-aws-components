import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TabContent } from './directives/tab-content.directive';
import { TabItem } from './directives/tab.directive';
import { TabLabel } from './directives/tabLabel.directive';
import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [
    TabsComponent,
    TabLabel,
    TabItem,
    TabContent,
  ],
  imports: [CommonModule, MatIconModule],
  exports: [
    TabsComponent,
    TabLabel,
    TabItem,
    TabContent,
  ]
})
export class TabsModule{}
