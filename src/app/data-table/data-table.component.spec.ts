import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableComponent } from './data-table.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../data.service';
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;
  let dataService: DataService;
  const data = [
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    },
    {
      name: 'Ciara G. Stanley',
      phone: '1-358-613-2160',
      id: 2,
      status: 'expired'
    }];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableComponent ],
      imports: [HttpClientModule, FormsModule],
      providers: [DataService]
    })
    .compileComponents();
    dataService = TestBed.get(DataService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getSampleData from service', () => {
    const dataServiceSpy = spyOn(dataService, 'getSampleData').and.returnValue(of(data));
    component.getTableData();
    expect(dataServiceSpy).toHaveBeenCalled();
  });

  it('should call to getSampleData return error', () => {
    const dataServiceSpy = spyOn(dataService, 'getSampleData').and.returnValue(throwError('error'));
    component.getTableData();
    expect(dataServiceSpy).toHaveBeenCalled();
  });

  it('should call to onOptionChange method calls initializeData', () => {
    const event = { target: { value: 10 } };
    component.allData = data;
    component.onOptionsSelected(event);
    expect(component.totalPages).toBe(2);
    expect(component.displayData.length).toBe(10);
  });

  it('should call handlePrev method on prevClick', () => {
    component.currentPage = 1;
    component.pageSize = 5;
    component.totalPages = 10;
    component.allData = data;
    fixture.detectChanges();
    component.handlePrev();
    expect(component.displayData.length).toBe(5);
  });

  it('should call handleNext method on handleNext Click', () => {
    component.pageSize = 4;
    component.totalPages = 10;
    component.currentPage = 0;
    component.allData = data;
    component.handleNext();
    expect(component.displayData.length).toBe(4);
  });

  it('should execute method on submit click', () => {
    const dataServiceSpy = spyOn(dataService, 'submitRow').and.returnValue(of({}));
    component.submitRow({id: 2, status: 'read'});
    expect(dataServiceSpy).toHaveBeenCalled();
  });

  it('should throw error on submit click', () => {
    const dataServiceSpy = spyOn(dataService, 'submitRow').and.returnValue(throwError('error'));
    component.submitRow({id: 2, status: 'read'});
    expect(dataServiceSpy).toHaveBeenCalled();
  });


});
