import { Component, OnInit } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { RouterModule      } from '@angular/router';

import { Producto } from 'src/app/interfaces/producto.interface';

import { ProductosService } from 'src/app/services/productos.service';



@Component({
  	selector: 'app-tabs',
  	standalone: true,
  	imports: [CommonModule, RouterModule],
  	templateUrl: './tabs.component.html',
  	styleUrls: ['./tabs.component.scss']
})



export class TabsComponent implements OnInit {


	categories: any = [];
	productos: Producto[] = [];


	constructor( private productosServices: ProductosService ) {}


	ngOnInit(): void {
		this.getProducts();
	}


	getProducts(): void {
		this.productos = this.productosServices.getProducts();
	}


	getCategories(): void {
		this.categories = this.productosServices.getCategories();
	}


}
