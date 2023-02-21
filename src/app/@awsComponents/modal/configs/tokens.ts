import { InjectionToken } from "@angular/core";
import { DialogConfig } from "../services/modal.service";

export const AWS_MODAL_DATA = new InjectionToken<DialogConfig>('AWS_MODAL_DATA');
