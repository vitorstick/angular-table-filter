import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ITableEntry } from '../models/api.interfaces';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiResolver implements Resolve<ITableEntry[]> {
  constructor(private apiService: ApiService) {}

  resolve(): Observable<ITableEntry[]> {
    return this.apiService.getData();
  }
}
