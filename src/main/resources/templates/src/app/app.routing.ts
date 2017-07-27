import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { BarangComponent } from './barang/barang/barang.component';
import { BarangListComponent } from './barang/barang-list/barang-list.component';

const routingApplikasi: Routes = [
    {
      path: 'barang', component: BarangListComponent
    },
    {
      path: "", redirectTo: '/barang', pathMatch: 'full'
    },
    {
      path: 'barang/:id', component: BarangComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routingApplikasi)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }