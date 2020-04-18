import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getSampleData(): Observable<any> {
    return this.httpClient.get('/assets/sample_data.json');
  }

  public submitRow(rowId: number, rowStatus: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const req = {
      id: rowId,
      status: rowStatus
    };

    return this.httpClient.post('/api/submit', req, options);
  }

}
