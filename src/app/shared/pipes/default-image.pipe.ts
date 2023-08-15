import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  	name: 'defaultImage',
  	standalone: true
})



export class DefaultImagePipe implements PipeTransform {

	transform(imageUrl: string | undefined): string {
		
		// Si la imagen original no existe (es undefined o null), devuelve la imagen por defecto

		const defaultImageUrl = 'assets/default-image.png';
		return imageUrl || defaultImageUrl;
	}

}
