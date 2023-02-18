import { AnimationEvent } from "@angular/animations";
import { Component, Inject,  OnInit, OnDestroy } from "@angular/core";
import { fadeToastAnimation, ToastAnimationState } from "./models/toast.animation";
import { ToastConfig, ToastPosConfig } from "./models/toast.config.model";
import { TOAST_CONFIG_TOKEN } from "./services/toast.service";
import { ToastRef } from "./toast.ref";


@Component({
  selector: 'aws-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [fadeToastAnimation],
})
export class ToastComponent implements OnInit, OnDestroy{

  animationState: ToastAnimationState = 'default';
  iconType: string;

  infoIcon    =  { fontSet: 'fas', fontIcon: 'fa-exclamation-circle' }
  alertIcon   =  { fontSet: 'fa', fontIcon: 'fa-exclamation-triangle' }
  errorIcon   =  { fontSet: 'fa', fontIcon: 'fa-times-circle' }
  successIcon =  { fontSet: 'far', fontIcon: 'fa-check-circle' }

  private intervalId: any;

  constructor(
    public readonly data: ToastConfig,
    public readonly ref: ToastRef,
    @Inject(TOAST_CONFIG_TOKEN) public toastConfig: ToastPosConfig
    ) { }

  ngOnInit(): void {
    this.intervalId = setTimeout(() => this.animationState = 'closing', 5000);
  }

  public showIcon(): { fontSet: string, fontIcon: string} {
    const options: any = {
      success: this.successIcon,
      info: this.infoIcon,
      alert: this.alertIcon,
      error: this.errorIcon,
    }
    return options[this.data.type!]
  }

  close() {
    this.ref.close();
  }

  onFadeFinished(event: AnimationEvent) {
    const { toState } = event;
    const isFadeOut = (toState as ToastAnimationState) === 'closing';
    const itFinished = this.animationState === 'closing';

    if (isFadeOut && itFinished) {
      this.close();
    }
  }

  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }
}
