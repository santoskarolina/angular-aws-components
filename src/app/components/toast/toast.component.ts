import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ToastService } from "./services/toast.service";


@Component({
  selector: 'aws-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
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
export class ToastComponent implements OnInit{

  @Input() public message: string = '';
  @Input() public class: string = '';
  @Input() public closeButton: boolean = false;

  infoIcon =  {fontSet: 'fas', fontIcon: 'fa-exclamation-circle'}
  alertIcon =  {fontSet: 'fa', fontIcon: 'fa-exclamation-triangle'}
  errorIcon =  {fontSet: 'fa', fontIcon: 'fa-times-circle'}
  successIcon =  {fontSet: 'far', fontIcon: 'fa-check-circle'}

  constructor(private _toastService: ToastService){}

  ngOnInit(): void {
  }

  public closeTast(){
    this._toastService.closeToast()
  }

  public showIcon():{ fontSet: string, fontIcon: string} {
    const options: any = {
      success: this.successIcon,
      info: this.infoIcon,
      alert: this.alertIcon,
      error: this.errorIcon,
    }
    return options[this.class]
  }
}
