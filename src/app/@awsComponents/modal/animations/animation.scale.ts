import { trigger, transition, style, animate } from "@angular/animations";

export const animationScale = trigger('box', [
  transition(':leave', [
    style({
      transform: 'scale(1)'
    }),
    animate('100ms ease-out', style({
      transform: 'scale(1.2)'
    })),
    animate('300ms ease-in', style({
      transform: 'scale(0)'
    }))
  ]),
  transition(':enter', [
    style({
      transform: 'scale(0.5)'
    }),
    animate('200ms ease-out', style({
      transform: 'scale(1.2)'
    })),
    animate('100ms ease-out', style({
      transform: 'scale(1)'
    }))
  ]),
]);
