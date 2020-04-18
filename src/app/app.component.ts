import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Data Table'
  public tableData = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getTableData();
  }
  
  getTableData() {
    this.dataService.getSampleData().subscribe((response: any) => {
      this.tableData = response;
    });
  }
}
