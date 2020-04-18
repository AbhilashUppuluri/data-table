import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lazy-data-table',
  templateUrl: './lazy-data-table.component.html',
  styleUrls: ['./lazy-data-table.component.scss']
})
export class LazyDataTableComponent implements OnInit {
  public tableData = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTableData();
  }

  getTableData() {
    this.dataService.getSampleData().subscribe((response: any) => {
      this.tableData = response;
    }, (error) => {
      console.log('error while fetching data from table service: ', error);
      this.tableData = [];
    });
  }

  
  public submitRow(row) {
    this.dataService.submitRow(row.id, row.status)
    .subscribe((data) => {
      console.log('Row has been submitted successfully.');
    }, (error) => {
      console.log('Failed to submit the row. Please try again: ', error);
    });
  }

}
