export class AlertData {
  message: string;
  action: string;

  constructor(msg: string, action: string = 'close') {
    this.message = msg;
    this.action = action;
  }
}