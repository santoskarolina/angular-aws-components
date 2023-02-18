export interface ToastConfig{

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
   type?: string,

   /**
   * @description
   * Position for the toast to be displayed, it can be on the right or on the left
   *
   */
   position: string


   /**
   * @description
   * Position for the toast to be displayed, it can be on the right or on the left
   *
   */
   showCloseButton?: boolean
}
