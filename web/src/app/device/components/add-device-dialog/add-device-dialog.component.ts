import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Device } from '@app/device/models/device';
import { DeviceService } from '@app/device/services/device.service';

interface DialogData {
  action: string;
  device?: Device;
}

@Component({
  selector: 'app-add-device-dialog',
  templateUrl: './add-device-dialog.component.html',
  styleUrls: ['./add-device-dialog.component.scss']
})
export class AddDeviceDialogComponent implements OnInit {
  isAddDevice = true;
  device: Device = new Device();
  deviceForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<AddDeviceDialogComponent>,
    private deviceService: DeviceService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initData();
    this.initForm();
  }

  initData(): void {
    this.isAddDevice = (this.dialogData.action === 'add');

    if (typeof(this.dialogData.device) != 'undefined') {
      this.device = this.dialogData.device;
    }
  }

  get f() {
    return this.deviceForm.controls;
  }

  initForm(): void {
    this.deviceForm = this.formBuilder.group({
      deviceName: [this.device.name, Validators.required],
      deviceIp: [this.device.ip, [Validators.required]]
    });
  }

  getDialogTitle(): string {
    return this.isAddDevice ? 'Add Device' : 'Modify Device';
  }

  submit(): void {
    const formData = this.deviceForm.controls;

    const newDevice = new Device();
    newDevice.name = formData.deviceName.value;
    newDevice.ip = formData.deviceIp.value;

    if (this.isAddDevice) {
      this.addDevice(newDevice);
    } else {
      newDevice.id = this.device.id;
      this.editDevice(newDevice);
    }
  }

  addDevice(device: Device) {
    this.deviceService.create(device).subscribe(result => {
      console.log(`add device ${device.name} success.`);
      this.closeDialog(true);
    }, err => {
      console.error(`add device ${device.name} failed.`);
      console.error(err);
    });
  }

  editDevice(device: Device) {
    this.deviceService.update(device).subscribe(result => {
      console.log(`update device ${device.name} success.`);
      this.closeDialog(true);
    }, err => {
      console.error(`update device ${device.name} failed.`);
      console.error(err);
    });
  }

  closeDialog(result = false) {
    this.dialogRef.close(result);
  }
}
