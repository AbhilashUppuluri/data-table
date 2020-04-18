import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  public pageSize = 10;
  public allData = [];
  public displayData = [];
  public currentPage = 0;
  public totalPages = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTableData();
  }

  getTableData() {
    this.dataService.getSampleData().subscribe((response: any) => {
      this.allData = response;
      this.initializeData();
    }, (error) => {
      console.log('error while fetching data from table service: ', error);
      this.allData = [];
    });
  }

  private initializeData() {
    this.totalPages = Math.ceil(this.allData.length / this.pageSize);
    this.displayData = this.allData.slice(0, this.pageSize);
  }

  public onOptionsSelected($event) {
    this.pageSize = Number($event.target.value);
    this.initializeData();
  }

  public handleNext() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      const count = this.currentPage * Number(this.pageSize);
      this.displayData = this.allData.slice(count, count + Number(this.pageSize));
    }
  }

  public handlePrev() {
    if (this.currentPage > 0) {
      this.currentPage--;
      const count = this.currentPage * Number(this.pageSize);
      this.displayData = this.allData.slice(count, count + Number(this.pageSize));
    }
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
