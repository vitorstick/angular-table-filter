import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITableEntry } from '../models/api.interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _baseUrl = 'assets/data/table_data.json';
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<ITableEntry[]> {
    return this.httpClient.get<any>(`${this._baseUrl}`).pipe(
      map((data) => {
        return Object.keys(data).map((key) => data[key]);
      })
    );
  }
}
