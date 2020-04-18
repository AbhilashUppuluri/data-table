import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyDataTableComponent } from './lazy-data-table/lazy-data-table.component';
import { DataTableComponent } from './data-table/data-table.component';


const routes: Routes = [
  { path: 'data-table', component: DataTableComponent, pathMatch: 'full' },
  { path: 'lazy-data-table', component: LazyDataTableComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'data-table', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
