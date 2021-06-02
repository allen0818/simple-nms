import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Device } from '../models/device';

const baseUrl = '/api/v1/devices/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getAll(): Observable<Device[]> {
    return this.http.get<Device[]>(baseUrl).pipe(
      tap(_ => console.log('fetch devices')),
      catchError(this.handleError<Device[]>('getDevices', []))
    );
  }

  getOne(id: number): Observable<Device> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<Device>(url).pipe(
      tap(_ => console.log(`fetah device id=${id}`)),
      catchError(this.handleError<Device>(`getDevice id=${id}`))
    )
  }

  create(device: Device): Observable<Device> {
    return this.http.post<Device>(baseUrl, device, httpOptions).pipe(
      tap((newDevice: Device) => console.log(`create device id=${newDevice.id}`)),
      catchError(this.handleError<Device>(`createDevice`))
    )
  }

  update(device: Device): Observable<Device> {
    return this.http.put<Device>(baseUrl, device).pipe(
      tap(_ => console.log(`create device id=${device.id}`)),
      catchError(this.handleError<Device>(`updateDevice`))
    )
  }


  delete(device: Device | number): Observable<Device> {
    const id = typeof device == 'number' ? device : device.id;
    const url = `${baseUrl}/${id}`;

    return this.http.delete<Device>(url, httpOptions).pipe(
      tap(_ => console.log(`delete device id=${id}`)),
      catchError(this.handleError<Device>(`updateDevice`))
    )
  }
}
