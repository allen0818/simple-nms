import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { AlertData } from '@app/shared/models/alert-data';

@Component({
  selector: 'app-alert-snack-bar',
  templateUrl: './alert-snack-bar.component.html',
  styleUrls: ['./alert-snack-bar.component.scss']
})
export class AlertSnackBarComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) private data: AlertData,
  ) { }

  ngOnInit(): void {
  }

  closeSnackBar() {
    this._snackBar.dismiss();
  }
}
