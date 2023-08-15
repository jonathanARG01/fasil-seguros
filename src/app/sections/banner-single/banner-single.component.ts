import { Component, Input } from '@angular/core';
import { CommonModule     } from '@angular/common';

import { Producto } from 'src/app/interfaces/producto.interface';

import { DefaultImagePipe } from 'src/app/shared/pipes/default-image.pipe';



@Component({
  	selector: 'banner-single',
  	standalone: true,
 	imports: [CommonModule, DefaultImagePipe],
  	templateUrl: './banner-single.component.html',
  	styleUrls: ['./banner-single.component.scss']
})



export class BannerSingleComponent {

	
	@Input() product!: Producto | undefined;


}
