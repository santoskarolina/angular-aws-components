import { Component } from '@angular/core';
import { Item1Component } from './components/item1/item1.component';
import { ToastService } from './@awsComponents/toast/services/toast.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ModalService } from './@awsComponents/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
        animate('0.5s')
      ]),
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

public badgesItems: any[] = [
  {
    label: 1,
    position: 'after',
    color: 'blue',
    size: 'small',
    text: 'After position, default size'
  },
  {
    label: 2,
    position: 'after',
    color: 'orange',
    size: 'medium',
    text: 'After position, small size'
  },
  {
    label: 3,
    position: 'before',
    color: 'green',
    size: 'large',
    text: 'Before position, large size'
  },
]

constructor(private _toastService: ToastService, private _modalService: ModalService){}

  selectedTabChange(event: number){
  }

  showSucessToast(){
    this._toastService.showSucessToast({
      message: 'Successs Toast',
    })
  }

  showErrorToast(){
    this._toastService.showErrorToast({
      message: 'Error Toast',
      showCloseButton: true
    })
  }

  showInfoToast(){
    this._toastService.showInfoToast({
        message: 'Info Toast',
        time: 5000,
    })
  }

  showAlertToast(){
    this._toastService.showAlertToast({
      message: 'Alert Toast',
    })
  }

  public openModal(){
    this._modalService.openModal(
      Item1Component,{
      data: {
        width: '30rem',
        height: '30rem',
        name: 'karol'
      }
    })
  }
}
