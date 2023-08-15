import { Component    } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

import { BannerProductsComponent } from 'src/app/sections/banner-products/banner-products.component';
import { TabsComponent           } from 'src/app/sections/tabs/tabs.component';
import { FooterComponent         } from 'src/app/shared/footer/footer.component';



@Component({
 	selector: 'app-productos',
  	standalone: true,
  	imports: [CommonModule, BannerProductsComponent, TabsComponent, FooterComponent],
  	templateUrl: './productos.component.html',
  	styleUrls: ['./productos.component.scss'],
	animations: [
		trigger('pageTransition', [
			transition(':enter, :leave', [
				style({ opacity: 0 }),
				animate('0.8s ease-in-out', style({ opacity: 1 })),
			]),
		])
	]
})



export class ProductosComponent {



}
