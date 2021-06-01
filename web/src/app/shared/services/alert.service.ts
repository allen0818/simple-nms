import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertSnackBarComponent } from '../components/alert-snack-bar/alert-snack-bar.component';
import { AlertData } from '../models/alert-data';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  openSnackBar(alertData: AlertData) {
    // this._snackBar.open(alertData.message, alertData.action);

    this._snackBar.openFromComponent(AlertSnackBarComponent, {
      data: alertData,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  success(message: string = 'Success!', action: string = 'Close') {
    const alertData = new AlertData(message, action);
    this.openSnackBar(alertData);
  }

  error(message: string = 'Failed!', action: string = 'Close') {
    const alertData = new AlertData(message, action);
    this.openSnackBar(alertData);
  }
}
