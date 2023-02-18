import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Item1Component } from './components/item1/item1.component';
import { ToastConfig } from './components/toast/models/toas.config.model';
import { ToastService } from './components/toast/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('closed', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('open => closed', animate('400ms ease-in-out')),
      transition('closed => open', animate('400ms ease-in-out'))
    ]),
  ],
})
export class AppComponent {
  title = 'angular-study';

  public isOpen: boolean = false;

  public items = [
    {
    title: 'Item 1',
    contentClass: '',
    headerClass: 'bg-slate-900 text-white',
    component: Item1Component
  },
  {
    title: 'Item 2',
    contentClass: '',
    headerClass: 'bg-slate-900 text-white',
    component: Item1Component
  },
  {
    title: 'Item 3',
    contentClass: '',
    headerClass: 'bg-slate-900 text-white',
    component: Item1Component
  }
]

constructor(private _toastService: ToastService){}

  selectedTabChange(event: number){
  }

  showToast(position: string){
    const config: ToastConfig = {
      message: 'Testando',
      position: position
    }
    this._toastService.showSucessToast(config)
  }

  showErrorToast(position: string){
    const config: ToastConfig = {
      message: 'Error',
      position: position,
      showCloseButton: true
    }
    this._toastService.showErrorToast(config)
  }

  showInfoToast(position: string){
    const config: ToastConfig = {
      message: 'Info',
      position: position
    }
    this._toastService.showInfoToast(config)
  }

  showAlertToast(position: string){
    const config: ToastConfig = {
      message: 'Info',
      position: position
    }
    this._toastService.showAlertToast(config)
  }
}
