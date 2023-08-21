// Angular
import { Component      } from '@angular/core';
import { CommonModule   } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Components
import { ModalComponent } from 'src/app/shared/modal/modal.component';

// Services
import { ProductosService } from 'src/app/services/productos.service';

// Interfaces
import { Producto } from 'src/app/interfaces/producto.interface';



@Component({
  	selector: 'contenido',
  	standalone: true,
  	imports: [CommonModule, ModalComponent],
  	templateUrl: './contenido.component.html',
  	styleUrls: ['./contenido.component.scss']
})



export class ContenidoComponent {


	public product?: Producto;
	count = 0;

	constructor( private activatedRoute: ActivatedRoute, private productosServices: ProductosService ) {}

	
	ngOnInit(): void {
	
		this.activatedRoute.params.subscribe(params => {
	
			const id = +params['id'];
	  
			this.productosServices.getProductById(id).subscribe((project: Producto | undefined) => {
				
				console.log('project desde content:', project);
				this.product = project;

		  	});

		});
	
	}


}
