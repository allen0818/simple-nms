import { ThrowStmt } from '@angular/compiler';
import { ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from '@app/device/models/device';

const FAKE_DEVICE: Device[] = [
  { id: 1, name: 'device1', ip: '192.168.10.1', state: 'linkup' },
  { id: 2, name: 'device2', ip: '192.168.10.2', state: 'linkup' },
  { id: 3, name: 'device3', ip: '192.168.10.3', state: 'linkdown' },
  { id: 4, name: 'device4', ip: '192.168.10.4', state: 'linkdown' },
  { id: 5, name: 'device5', ip: '192.168.10.5', state: 'linkup' },
  { id: 6, name: 'device6', ip: '192.168.10.6', state: 'linkup' },
  { id: 7, name: 'device7', ip: '192.168.10.7', state: 'linkup' },
  { id: 8, name: 'device8', ip: '192.168.10.8', state: 'linkdown' },
  { id: 9, name: 'device9', ip: '192.168.10.9', state: 'linkdown' },
  { id: 10, name: 'device10', ip: '192.168.10.10', state: 'linkdown' },
]

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit, AfterViewInit {
  devices: Device[] = [];

  displayColumns = ['id', 'name', 'ip', 'state'];
  dataSource = new MatTableDataSource<Device>();
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;


  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataSource.data = FAKE_DEVICE;
  }

}
