import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AwsMenu } from './directives/menu.directive';
import { AwsMenuItem } from './directives/menuItem.directive';
import { AwsMenuComponent } from './menu.component';
@NgModule({
  declarations: [
    AwsMenuComponent,AwsMenuItem,AwsMenu
  ],
  imports: [CommonModule, MatIconModule],
  exports: [
    AwsMenuComponent,
    AwsMenuItem,
    AwsMenu
  ]
})
export class MenuModule{}
