import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';

import { Barang } from './barang.model';
import { PaginationPage, PaginationPropertySort } from '../util/pagination';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publish';
import { Observable } from 'rxjs';

@Injectable()
export class BarangService {

  	constructor(private http: Http) { }

  	findAllBarang(page: number, pageSize: number, sort: PaginationPropertySort): 
  		Observable<PaginationPage<Barang>> {
  		
  		let params = new URLSearchParams();
  		params.set('size', `${pageSize}`);
  		params.set('page', `${page}`);

  		if(sort != null) {
  			params.set('sort', `${sort.property},${sort.direction}`);
  		}

  		let options = new RequestOptions({
  			search: params
  		});

  		return this.http.get('/api/barangs', options).map(this.extractData).publish().refCount();
  	}

  	getBarang(id: number): Observable<Barang> {
  		return this.http.get('/api/barang/' + id).map(this.extractData).publish().refCount();
  	}

  	deleteBarang(id: number): Observable<Response> {
  		return this.http.delete('/api/barang/{id}').publish().refCount();
  	}

  	private extractData(res: Response) {
  		let body = res.json();
  		return body || {};
  	}

}
