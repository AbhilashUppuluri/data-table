import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyDataTableComponent } from './lazy-data-table.component';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { throwError, of } from 'rxjs';

describe('LazyDataTableComponent', () => {
  let component: LazyDataTableComponent;
  let fixture: ComponentFixture<LazyDataTableComponent>;
  let dataService: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyDataTableComponent ],
      imports: [HttpClientModule, FormsModule],
      providers: [DataService]
    })
    .compileComponents();
    dataService = TestBed.get(DataService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call getSampleData from service', () => {
    const dataServiceSpy = spyOn(dataService, 'getSampleData').and.returnValue(of([]));
    component.getTableData();
    expect(dataServiceSpy).toHaveBeenCalled();
  });

  it('should call to getSampleData return error', () => {
    const dataServiceSpy = spyOn(dataService, 'getSampleData').and.returnValue(throwError('error'));
    component.getTableData();
    expect(dataServiceSpy).toHaveBeenCalled();
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
