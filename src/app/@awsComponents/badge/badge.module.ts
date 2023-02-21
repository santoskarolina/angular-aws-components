import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AwsBadgeLabel } from './directives/badge.directive';

@NgModule({
  declarations: [
    AwsBadgeLabel
  ],
  imports: [CommonModule],
  exports: [
    AwsBadgeLabel
  ],
  providers: [ ]
})
export class BadgeModule{
}
