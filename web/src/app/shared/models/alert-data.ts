export class AlertData {
  icon: string;
  message: string;
  style: object;

  constructor(msg: string, icon: string, style: object) {
    this.message = msg;
    this.icon = icon;
    this.style = style;
  }
}