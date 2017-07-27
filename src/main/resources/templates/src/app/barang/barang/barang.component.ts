import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs';

import { BarangService } from '../barang.service';
import { Barang } from '../barang.model';

import { PaginationPage, PaginationPropertySort } from '../../util/pagination';
import { Table } from '../../util/table';

@Component({
  selector: 'app-barang',
  templateUrl: './barang.component.html',
  styleUrls: ['./barang.component.css']
})
export class BarangComponent implements OnInit {

	private barang: Barang;

  	constructor(private barangService: BarangService, private router: Router, 
  		private route: ActivatedRoute) { }

  	ngOnInit() {
  		this.route.params.subscribe(params => {
  			this.barangService.getBarang(Number(params['id'])).subscribe(barang => this.barang = barang);
  		});
  	}

  	delete(barang: Barang) {
  		let obs: Observable<Response> = this.barangService.deleteBarang(barang.id);
  		obs.subscribe(() => {
  			this.router.navigate(['']);
  		});
  	}

  	back() {
  		history.back();
  	}
  	
}
