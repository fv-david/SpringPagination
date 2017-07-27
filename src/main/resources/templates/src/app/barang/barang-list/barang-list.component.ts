import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

import { PaginationPage, PaginationPropertySort } from '../../util/pagination';
import { Table } from '../../util/table';
import { BarangService } from '../barang.service';
import { Barang } from '../barang.model';


@Component({
  selector: 'app-barang-list',
  templateUrl: './barang-list.component.html',
  styleUrls: ['./barang-list.component.css']
})
export class BarangListComponent implements OnInit, Table<Barang> {

	barangPage: PaginationPage<Barang>;
	self: Table<Barang>;

	constructor(private barangService: BarangService, private router: Router) { }

	ngOnInit() {
		let obs: Observable<PaginationPage<any>> = this.fetchPage(0, 10, null);
		obs.subscribe();
		this.self = this;
	}

	fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort): 
		Observable<PaginationPage<Barang>> {

		let obs: Observable<PaginationPage<Barang>> = this.barangService.findAllBarang(pageNumber, pageSize, sort);

		obs.subscribe(barangPage => this.barangPage = barangPage);
		return obs;
	}

	goToDetails(barang: Barang) {
        this.router.navigate(['barang', barang.id]);
    }

    delete(barang: Barang) {
    	let obs: Observable<Response> = this.barangService.deleteBarang(barang.id);
    	obs.switchMap(() => {
    		return this.fetchPage(0, 10, null);
    	}).subscribe();
    }

}
