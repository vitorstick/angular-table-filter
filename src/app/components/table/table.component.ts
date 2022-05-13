import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { ITableEntry } from 'src/app/models/api.interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() tableData: ITableEntry[] = [];

  keys: string[] = [];

  constructor() {}

  ngOnInit(): void {
    const element = this.tableData[0];
    if (this.tableData[0]) {
      this.keys = Object.keys(element).map((key: string) => key);
    }
  }
}
