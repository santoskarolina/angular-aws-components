import { ToastType } from "./toast.types";

export class ToastConfig{

  /**
   * @description
   * Message that will be displayed in the toast.
   *
   */
   message: string;

   /**
   * @description
   * Time for the toast to close, by default the time is 5000ms
   *
   */
   time?: number

  /**
   * @description
   * Type of toast you want to display, which can be error, success, alert and information
   *
   */
   type?: ToastType = "success"

   /**
   * @description
   * if true, it should display the button to close the toast
   *
   */
   showCloseButton?: boolean
}
