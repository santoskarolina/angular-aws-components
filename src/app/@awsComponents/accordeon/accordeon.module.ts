import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordeonComponent } from './accodeon.component';
import { AccordionContent  } from './directives/accordeon.content.directive';
import { MatIconModule } from '@angular/material/icon';
import { AccordionItem } from './directives/accordeon.item.directive';
import { AccordionHeader } from './directives/accordeon.header.directive';
import { AccordionTitle } from './directives/accordeon.title.directive';

@NgModule({
  declarations: [
    AccordeonComponent,
    AccordionContent,
    AccordionItem,
    AccordionHeader,
    AccordionTitle,
  ],
  imports: [CommonModule, MatIconModule],
  exports: [
    AccordeonComponent,
    AccordionContent,
    AccordionItem,
    AccordionHeader,
    AccordionTitle,
  ]
})
export class AccordeonModule{}
