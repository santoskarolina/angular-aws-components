import { animate, state, style, transition, trigger } from "@angular/animations";

export const openCloseTabAnimation = trigger('openClose', [
  state('open', style({
    transform: 'translate3d(0,0,0)'
  })),
  state('closed', style({
    transform: 'translate3d(100%, 0, 0)'
  })),
  transition('open => closed', animate(`{{time}} ease-in-out`)),
  transition('closed => open', animate('{{time}} ease-in-out'))
]);
