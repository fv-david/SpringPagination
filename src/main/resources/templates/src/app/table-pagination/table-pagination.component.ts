import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { PaginationPage, PaginationPropertySort } from '../util/pagination';
import { Table } from '../util/table';

import { Observable } from 'rxjs';

@Component({
    selector: 'app-table-pagination',
    templateUrl: './table-pagination.component.html',
    styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent implements OnInit, OnChanges {

    @Input() table: Table<any>;
    @Input() page: PaginationPage<any>;

    pagesIndexes: Array<number> = [];

    ngOnInit() {

    }

    ngOnChanges(changes) {
        if (changes['page']) {
            let pagesIndexes_: Array<number> = [];
            for (let i = 0; i < this.page.totalPages; i++) {
                pagesIndexes_.push(i + 1);
            }
            this.pagesIndexes = pagesIndexes_;
        }
    }

    fetchPageNumber(pageNumer: number) {
        let observable: Observable<any> = this.table.fetchPage(pageNumer - 1, this.page.size, this.getSort());
        if (observable != null) {
            observable.subscribe();
        }
    }

    fetchPageSize(pageSize: number) {
        let observable: Observable<any> = this.table.fetchPage(this.page.number, pageSize, this.getSort());
        if (observable != null) {
            observable.subscribe();
        }
    }

    fetchNextPage() {
        if (this.page.number + 1 >= this.page.totalPages) {
            return;
        }

        let observable: Observable<any> = this.table.fetchPage(this.page.number + 1, this.page.size, this.getSort());
        if (observable != null) {
            observable.subscribe();
        }
    }

    fetchPreviousPage() {
        if (this.page.number == 0) {
            return;
        }

        let observable: Observable<any> = this.table.fetchPage(this.page.number - 1, this.page.size, this.getSort());
        if (observable != null) {
            observable.subscribe();
        }
    }

    private getSort(): PaginationPropertySort {
        if (this.page.sort != null && this.page.sort.length > 0) {
            return this.page.sort[0];
        } else {
            return null;
        }
    }
}
