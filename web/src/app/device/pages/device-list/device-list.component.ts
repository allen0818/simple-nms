import { ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from '@app/device/models/device';
import { DeviceService } from '@app/device/services/device.service';
import { AlertService } from '@app/shared/services/alert.service';
import { AddDeviceDialogComponent } from '../add-device-dialog/add-device-dialog.component';
import { Router } from '@angular/router';


const FAKE_DEVICE: Device[] = [
  { id: 1, name: 'device1', ip: '192.168.10.1', model: 'unknown', state: 'linkup' },
  { id: 2, name: 'device2', ip: '192.168.10.2', model: 'unknown', state: 'linkup' },
  { id: 3, name: 'device3', ip: '192.168.10.3', model: 'unknown', state: 'linkdown' },
  { id: 4, name: 'device4', ip: '192.168.10.4', model: 'unknown', state: 'linkdown' },
  { id: 5, name: 'device5', ip: '192.168.10.5', model: 'unknown', state: 'linkup' },
]

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit, AfterViewInit {
  devices: Device[] = [];

  displayColumns = ['id', 'name', 'ip', 'state', 'action'];
  dataSource = new MatTableDataSource<Device>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;


  constructor(
    private deviceService: DeviceService,
    private alertService: AlertService,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllDevices();
  }

  loadData() {
    this.dataSource.data = this.devices;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // console.log('filter value', filterValue);

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  initDeviceList(newDevices: Device[]): void {
    this.devices = [];
    newDevices.forEach(d => {
      this.devices.push({ ...d });
    })
  }

  getAllDevices(): void {
    this.deviceService.getAll().subscribe(result => {
      console.log('all devices', result);
      this.initDeviceList(result);
      this.loadData();
    });
  }

  deleteDevice(id: number): void {
    this.deviceService.delete(id).subscribe(
      result => {
        this.alertService.success('Deleted !');
        this.devices = this.devices.filter(d => d.id != id);
        this.loadData();
      }, err => {
        this.alertService.error('Failed !');
      }
    );
  }


  // deleteDevice(id: number): void {
  //   this.deviceService.delete(id).subscribe(result => {
  //     if (result) {
  //       this.alertService.success('Deleted !');
  //       this.devices = this.devices.filter(d => d.id != id)
  //     } else {
  //       this.alertService.error('Failed !');
  //     }
  //   })
  // }

  addDevice(): void {
    this.openDialog('add');
  }

  editDevice(device: Device): void {
    // this.openDialog('edit', device);
    this.router.navigate(['home', 'devices', `${device.id}`]);
  }

  openDialog(action: string, device: Device | undefined = undefined) {
    const dialogRef = this.dialog.open(AddDeviceDialogComponent, {
      width: '500px',
      data: {
        action: action,
        device: device
      }
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.getAllDevices();
    });
  }
}
