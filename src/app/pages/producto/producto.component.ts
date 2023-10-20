import { Component      } from '@angular/core';
import { CommonModule   } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

import { Producto } from 'src/app/interfaces/producto.interface';

import { ProductosService } from 'src/app/services/productos.service';

import { BannerSingleComponent  } from 'src/app/sections/banner-single/banner-single.component';
import { TipsComponent          } from 'src/app/sections/tips/tips.component';
import { BenefitsComponent      } from 'src/app/sections/benefits/benefits.component';
import { UnderstandingComponent } from 'src/app/sections/understanding/understanding.component';
import { ContenidoComponent     } from 'src/app/sections/contenido/contenido.component';
import { FooterComponent        } from 'src/app/shared/footer/footer.component';



@Component({
  	selector: 'app-producto',
  	standalone: true,
  	imports: [
		CommonModule,
		BannerSingleComponent,
		ContenidoComponent,
		BenefitsComponent,
		UnderstandingComponent,
		TipsComponent,
		FooterComponent,
		RouterModule
	],
  	templateUrl: './producto.component.html',
  	styleUrls: ['./producto.component.scss'],
	animations: [
		trigger('pageTransition', [
			transition(':enter, :leave', [
				style({ opacity: 0 }),
				animate('0.8s ease-in-out', style({ opacity: 1 })),
			]),
		])
	]
})



export class ProductoComponent {


	public product?: Producto;
	isLoading: boolean = true;

	
	constructor( private activatedRoute: ActivatedRoute, private productsService: ProductosService ) {}


	ngOnInit(): void {
	
		this.activatedRoute.params.subscribe(params => {
	
			const id = params['id'].toString();
			
			this.productsService.getProductById(id).subscribe((project: Producto | undefined) => {
				
				this.isLoading = false;
				this.product = project;

		  	});

		});
	
	}


}
