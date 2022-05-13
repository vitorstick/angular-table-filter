import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { ITableEntry } from 'src/app/models/api.interfaces';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
})
export class MainComponentComponent implements OnInit {
  data$!: Observable<ITableEntry[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // get keys of ITableEntry into an array of strings
    // const keys = Object.keys(data.table).map((key) => data[key]);

    this.data$ = this.route.data.pipe(
      map((data) => {
        return data.table;
      })
    );

    this.data$.subscribe((data) => {
      console.log(data);
    });
  }
}
