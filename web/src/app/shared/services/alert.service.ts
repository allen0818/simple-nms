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
      duration: 3000,
      // horizontalPosition: 'right',
      // verticalPosition: 'bottom',
    });
  }

  success(message = 'Success') {
    const icon = 'check_circle_outline';
    const style = { color: 'green' }
    const alertData = new AlertData(message, icon, style);

    this.openSnackBar(alertData);
  }

  error(message = 'Failed') {
    const icon = 'cancel';
    const style = { color: 'red' };
    const alertData = new AlertData(message, icon, style);

    this.openSnackBar(alertData);
  }
}
