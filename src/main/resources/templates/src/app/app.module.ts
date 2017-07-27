import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';

import { BarangService } from './barang/barang.service';

import { AppComponent } from './app.component';
import { BarangComponent } from './barang/barang/barang.component';
import { BarangListComponent } from './barang/barang-list/barang-list.component';

import { TableSortComponent } from './table-sort/table-sort.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { TableElementsCountComponent } from './table-elements-count/table-elements-count.component';


@NgModule({
  declarations: [
    AppComponent,
    BarangComponent,
    BarangListComponent,
    TableSortComponent,
    TablePaginationComponent,
    TableElementsCountComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
  	BarangService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
