# Simple Pagination with Spring REST and Angular 4

The application is a simple barang’s directory app which allows users to see the barang details in a paginated table grid.

Solution here is simple – having the paging information in a URI query as follows:  
	> GET 	/barangs 		--> get all barang
	> GET 	/barang/{id}	--> get barang by Id
	> POST 	/barang 		--> post new barang
	> DELETE 	/barang/{id}	--> delete barang by id


Repository Spring Boot
	public interface BarangRepository extends PagingAndSortingRepository<Barang, Long>{ }


Pagination interface in angular
	export interface PaginationPage<T> {
	    content? : Array<T>;
	    last?: boolean;
	    first?: boolean;
	    number: number;
	    size: number;
	    totalPages? : number;
	    itemsPerPage?: number;
	    sort?: Array<PaginationPropertySort>;
	}


