import { trigger, transition, style, animate } from "@angular/animations";

export const animationFade =  trigger('tooltip', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(300, style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate(300, style({ opacity: 0 })),
  ]),
]);
