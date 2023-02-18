export interface ToastPosConfig {
  position?: {
      top: number;
      right: number;
  };
  animation?: {
      fadeOut: number;
      fadeIn: number;
  };
}

export const defaultToastConfig: ToastPosConfig = {
  position: {
      top: 20,
      right: 20,
  },
  animation: {
      fadeOut: 2500,
      fadeIn: 300,
  },
};
